import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const routes = JSON.parse(readFileSync(new URL('../../../deploy/cloudflare/language-routes.json', import.meta.url), 'utf8'));

// Model documented route specificity, including query strings in URL matching.
function selectedScript(path) {
  const url = `academic.davidz.cn${path}`;
  return routes.filter(({ pattern }) => {
    const expression = pattern.split('*').map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('.*');
    return new RegExp(`^${expression}$`).test(url);
  }).sort((a, b) => b.pattern.length - a.pattern.length)[0]?.script;
}

for (const path of ['/', '/?lang=zh&source=cv']) {
  test(`root invokes language router: ${path}`, () => {
    assert.equal(selectedScript(path), 'academic-language-router');
  });
}

for (const path of ['/en/?source=cv', '/zh/publication/paper/', '/en/authors/admin/avatar.jpg', '/css/app.css?v=1', '/js/app.js', '/media/icon.png', '/webfonts/fa.woff2', '/robots.txt?x=1', '/sitemap.xml']) {
  test(`page or resource bypasses Workers: ${path}`, () => {
    assert.equal(selectedScript(path), undefined);
  });
}
