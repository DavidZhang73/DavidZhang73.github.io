import assert from 'node:assert/strict';
import test from 'node:test';
import { rootResponse, savedLanguage } from '../src/index.js';

function response({ header, cookie, country, path = '/', method = 'GET' } = {}) {
  const headers = {};
  if (header) headers['Accept-Language'] = header;
  if (cookie) headers.Cookie = cookie;
  const request = new Request(`https://academic.davidz.cn${path}`, { headers, method });
  Object.defineProperty(request, 'cf', { value: { country } });
  return rootResponse(request);
}

for (const [name, input, language] of [
  ['Chinese browser abroad', { header: 'zh-CN,zh;q=0.9,en;q=0.8', country: 'AU' }, 'zh'],
  ['English browser in China', { header: 'en-US,en;q=0.9,zh;q=0.8', country: 'CN' }, 'en'],
  ['first supported language', { header: 'fr;q=1,zh;q=0.9,en;q=0.8' }, 'zh'],
  ['quality outranks header order', { header: 'en;q=0.4,zh;q=0.9' }, 'zh'],
  ['stable tie breaking', { header: 'zh;q=0.8,en;q=0.8' }, 'zh'],
  ['zero is not acceptable', { header: 'zh;q=0,en;q=1', country: 'CN' }, 'en'],
  ['zero exclusion affects fallback', { header: 'zh;q=0', country: 'CN' }, 'en'],
  ['all languages excluded', { header: 'zh;q=0,en;q=0', country: 'CN' }, 'en'],
  ['case and region handling', { header: 'ZH-Hant-TW;q=0.8,en;q=0.7' }, 'zh'],
  ['invalid quality ignored', { header: 'zh;q=2,en;q=0.5' }, 'en'],
  ['malformed header falls back', { header: 'not a language;q=no', country: 'CN' }, 'zh'],
  ['unsupported browser in China', { header: 'ja,fr;q=0.8', country: 'CN' }, 'zh'],
  ['unsupported browser elsewhere', { header: 'ja', country: 'US' }, 'en'],
  ['no browser preference in China', { country: 'CN' }, 'zh'],
  ['unknown country', {}, 'en'],
  ['wildcard uses country fallback', { header: '*', country: 'CN' }, 'zh'],
  ['manual choice beats browser and country', { cookie: '__Host-academic_language=en', header: 'zh', country: 'CN' }, 'en'],
  ['unrelated cookies ignored', { cookie: 'other=zh; __Host-academic_language=zh; analytics=x', header: 'en' }, 'zh'],
  ['invalid saved choice ignored', { cookie: '__Host-academic_language=fr', header: 'zh' }, 'zh'],
  ['explicit new choice overrides saved choice', { path: '/?lang=en', cookie: '__Host-academic_language=zh', header: 'zh' }, 'en'],
  ['invalid query is not an open redirect', { path: '/?lang=https://evil.example/', header: 'zh' }, 'zh'],
]) {
  test(name, () => {
    const result = response(input);
    assert.equal(result.status, 302);
    assert.equal(new URL(result.headers.get('Location')).pathname, `/${language}/`);
    assert.equal(result.headers.get('Content-Language'), language);
    assert.equal(result.headers.get('Cache-Control'), 'no-store');
    assert.equal(result.headers.get('Vary'), 'Accept-Language, Cookie');
    if (!input.path?.includes('lang=en')) assert.equal(result.headers.get('Set-Cookie'), null);
  });
}

test('preserves other query parameters and remembers only explicit choices', () => {
  const result = response({ path: '/?utm_source=cv&lang=zh&name=a%26b' });
  const url = new URL(result.headers.get('Location'));
  assert.equal(url.searchParams.get('utm_source'), 'cv');
  assert.equal(url.searchParams.get('name'), 'a&b');
  assert.equal(url.searchParams.has('lang'), false);
  assert.equal(result.headers.get('Set-Cookie'), '__Host-academic_language=zh; Path=/; Max-Age=31536000; Secure; SameSite=Lax');
});

for (const path of ['/en/', '/zh/', '/en/publication/paper/', '/css/app.css', '/robots.txt']) {
  test(`never negotiates explicit resource ${path}`, () => {
    assert.equal(response({ path, header: 'zh', cookie: '__Host-academic_language=en', country: 'CN' }), null);
  });
}

test('HEAD has redirect headers and no body', async () => {
  const result = response({ method: 'HEAD', header: 'zh' });
  assert.equal(result.status, 302);
  assert.equal(await result.text(), '');
});

test('POST is not redirected', () => {
  const result = response({ method: 'POST' });
  assert.equal(result.status, 405);
  assert.equal(result.headers.get('Allow'), 'GET, HEAD');
  assert.equal(result.headers.get('Cache-Control'), 'no-store');
});

test('malformed cookie cannot inject response headers', () => {
  assert.equal(savedLanguage('__Host-academic_language=zh%0d%0aLocation:evil'), null);
});
