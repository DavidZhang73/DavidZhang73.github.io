import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const script = readFileSync(new URL('../../../assets/js/language-preference.js', import.meta.url), 'utf8');

function browser({ root = false, cookie = '', languages = ['en-US'], url = 'https://academic.davidz.cn/' } = {}) {
  let listener;
  let destination;
  const writes = [];
  const document = {
    documentElement: { dataset: { languageRedirect: String(root) } },
    get cookie() { return cookie; },
    set cookie(value) { writes.push(value); },
    addEventListener(name, handler, capture) {
      assert.equal(name, 'click');
      assert.equal(capture, true);
      listener = handler;
    },
  };
  vm.runInNewContext(script, {
    document, URL, navigator: { languages },
    location: { href: url, origin: new URL(url).origin, replace(value) { destination = value; } },
  });
  return { writes, destination, click(href) { listener({ target: { closest() { return { href }; } } }); } };
}

test('manual translation link saves preference without changing navigation', () => {
  const page = browser();
  page.click('https://academic.davidz.cn/zh/publication/paper/');
  assert.equal(page.destination, undefined);
  assert.match(page.writes[0], /^__Host-academic_language=zh; Path=\/;.*Secure; SameSite=Lax$/);
});

test('cross-origin links do not alter preferences', () => {
  const page = browser();
  page.click('https://elsewhere.example/zh/');
  assert.deepEqual(page.writes, []);
});

test('fallback respects saved choice over browser preference', () => {
  const page = browser({ root: true, cookie: '__Host-academic_language=zh', languages: ['en-US'] });
  assert.equal(page.destination, 'https://academic.davidz.cn/zh/');
  assert.deepEqual(page.writes, []);
});

test('fallback chooses the first supported browser language', () => {
  const page = browser({ root: true, languages: ['fr-FR', 'zh-Hant', 'en-US'], url: 'https://academic.davidz.cn/?source=cv#about' });
  assert.equal(page.destination, 'https://academic.davidz.cn/zh/?source=cv#about');
});

test('fallback explicit choice overrides a cookie and is remembered', () => {
  const page = browser({ root: true, cookie: '__Host-academic_language=en', url: 'https://academic.davidz.cn/?lang=zh&source=cv' });
  assert.equal(page.destination, 'https://academic.davidz.cn/zh/?source=cv');
  assert.match(page.writes[0], /^__Host-academic_language=zh;/);
});

test('fallback without supported browser languages defaults to English', () => {
  assert.equal(browser({ root: true, languages: ['ja'] }).destination, 'https://academic.davidz.cn/en/');
});
