#!/usr/bin/env python3
"""Check built HTML and exercise the staged cache policy in a local Nginx."""

import argparse
import http.client
from pathlib import Path
import socket
import subprocess
import tempfile
import time


REPO = Path(__file__).resolve().parents[1]
IMMUTABLE = "public, max-age=31536000, immutable"
HTML_CACHE = "public, max-age=0, s-maxage=600"


def check_site(site):
    pages = list(site.rglob("*.html"))
    assert pages, f"No HTML found in {site}"
    for lang in ("en", "zh"):
        home = (site / lang / "index.html").read_text()
        assert "about" in home and "featured" in home, lang
        assert "mathjax" not in home.lower(), lang
    root = (site / "index.html").read_text()
    assert 'data-language-redirect=true' in root or 'data-language-redirect="true"' in root
    assert 'language-preference' in root and 'hreflang=x-default' in root
    assert 'url=https://academic.davidz.cn/en/' not in root
    print(f"PASS: {len(pages)} HTML pages built; both homepages omit MathJax and root fallback remains intact")


def check_nginx(binary):
    with tempfile.TemporaryDirectory(prefix="academic-cache-") as tmp:
        work = Path(tmp)
        root = work / "public"
        fixtures = {
            "index.html": "Root language fallback",
            "en/index.html": "English homepage",
            "zh/index.html": "Chinese homepage",
            "en/404.html": "Not found",
            "en/index.json": "{}",
            "js/app.js": "console.log('unversioned');",
            "js/app." + "a1" * 16 + ".js": "console.log('versioned');",
            "en/authors/admin/avatar_hu" + "a1" * 16 + "_123_270x270_fill_q95.jpg": "avatar",
            "en/publication/paper/featured_hu" + "b2" * 16 + "_123_" + "c3" * 16 + ".webp": "paper",
            "media/logo.svg": "<svg/>",
        }
        for name, content in fixtures.items():
            path = root / name
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(content)

        with socket.socket() as sock:
            sock.bind(("127.0.0.1", 0))
            port = sock.getsockname()[1]

        config = work / "nginx.conf"
        config.write_text(f"""
daemon off;
master_process off;
pid {work}/nginx.pid;
error_log {work}/error.log;
events {{ worker_connections 64; }}
http {{
    access_log off;
    include {REPO}/deploy/nginx/00-academic-cache.conf;
    types {{ text/html html; image/jpeg jpg; image/webp webp; }}
    server {{
        listen 127.0.0.1:{port};
        root {root};
        add_header X-Content-Type-Options nosniff always;
        location / {{
            index index.html;
            include {REPO}/deploy/nginx/academic-cache-headers.inc;
        }}
        error_page 404 /en/404.html;
    }}
}}
""")
        args = [str(binary), "-p", str(work) + "/", "-c", str(config)]
        subprocess.run(args + ["-t"], check=True, capture_output=True)
        server = subprocess.Popen(args, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)

        def request(url, headers=None, method="GET"):
            connection = http.client.HTTPConnection("127.0.0.1", port, timeout=3)
            try:
                connection.request(method, url, headers=headers or {})
                response = connection.getresponse()
                result = response.status, response.headers
                response.read()
                return result
            finally:
                connection.close()

        try:
            for attempt in range(50):
                try:
                    request("/")
                    break
                except OSError:
                    if server.poll() is not None:
                        raise RuntimeError(server.stderr.read().decode())
                    time.sleep(0.05)
            else:
                raise RuntimeError("Local Nginx did not start")

            cases = [("/", "no-cache"), ("/?lang=zh", "no-cache"),
                     ("/en/", HTML_CACHE), ("/zh/", HTML_CACHE),
                     ("/en/?source=cv", HTML_CACHE),
                     ("/en/index.html", HTML_CACHE), ("/en/index.json", "no-cache"),
                     ("/js/app.js", "public, max-age=3600"),
                     ("/media/logo.svg", "public, max-age=604800")]
            cases += [("/" + name, IMMUTABLE) for name in fixtures
                      if "_hu" in name or "/app.a1" in name]
            checks = 0
            for url, policy in cases:
                status, headers = request(url)
                assert status == 200, (url, status)
                assert headers.get_all("Cache-Control") == [policy], (url, headers)
                assert headers["X-Content-Type-Options"] == "nosniff", url
                checks += 1
                status, cached = request(url, {"If-None-Match": headers["ETag"]})
                assert status == 304, (url, status)
                assert cached.get_all("Cache-Control") == [policy], (url, cached)
                checks += 1
                status, cached = request(url, {"If-Modified-Since": headers["Last-Modified"]})
                assert status == 304, (url, status)
                assert cached.get_all("Cache-Control") == [policy], (url, cached)
                checks += 1
            for url in ("/en/", cases[-1][0]):
                status, headers = request(url, method="HEAD")
                assert status == 200
                assert headers["Cache-Control"] == dict(cases)[url]
                checks += 1
            for url in ("/en/missing/", "/media/missing_hu" + "a1" * 16 + "_123.jpg"):
                status, headers = request(url)
                assert status == 404 and headers["Cache-Control"] == "no-store", (url, status, headers)
                checks += 1
            image = next("/" + name for name in fixtures if name.endswith(".jpg"))
            status, headers = request(image, {"Range": "bytes=0-2"})
            assert status == 206 and headers["Cache-Control"] == IMMUTABLE
            checks += 1
            print(f"PASS: {checks} local HTTP checks, including 304, HEAD, range, errors and inherited security headers")
        finally:
            server.terminate()
            server.communicate(timeout=5)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--site", type=Path, required=True)
    parser.add_argument("--nginx", type=Path, required=True)
    options = parser.parse_args()
    check_site(options.site.resolve())
    check_nginx(options.nginx.resolve())
