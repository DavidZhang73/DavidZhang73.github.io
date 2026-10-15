const COOKIE = "__Host-academic_language";

/** @param {string | null} value */
export function savedLanguage(value) {
  for (const part of (value || "").split(";")) {
    const [name, ...rest] = part.trim().split("=");
    if (name !== COOKIE) continue;
    const language = rest.join("=");
    if (language === "en" || language === "zh") return language;
  }
  return null;
}

/** @param {string | null} header */
export function browserLanguage(header) {
  /** @type {string | null} */
  let best = null;
  let weight = 0;
  /** @type {Set<string>} */
  const excluded = new Set();
  // Bound parsing work even when a client sends an unusually long header.
  for (const entry of (header || "").slice(0, 8192).split(",")) {
    const match = entry.trim().match(/^([a-z]{1,8}(?:-[a-z0-9]{1,8})*)(?:\s*;\s*q=(0(?:\.\d{0,3})?|1(?:\.0{0,3})?))?$/i);
    if (!match) continue;
    const language = match[1].toLowerCase().split("-")[0];
    if (language !== "en" && language !== "zh") continue;
    const quality = match[2] === undefined ? 1 : Number(match[2]);
    if (quality === 0) excluded.add(language);
    if (quality > weight) {
      best = language;
      weight = quality;
    }
  }
  return { language: best, excluded };
}

/** @param {Request} request */
export function rootResponse(request) {
  const url = new URL(request.url);
  if (url.pathname !== "/") return null;
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response("Method not allowed", {
      status: 405,
      headers: { Allow: "GET, HEAD", "Cache-Control": "no-store" },
    });
  }

  const explicit = url.searchParams.get("lang");
  const manual = explicit === "en" || explicit === "zh" ? explicit : null;
  const preferred = browserLanguage(request.headers.get("Accept-Language"));
  let fallback = request.cf?.country === "CN" ? "zh" : "en";
  if (preferred.excluded.has(fallback)) fallback = fallback === "zh" ? "en" : "zh";
  if (preferred.excluded.size === 2) fallback = "en";
  const language = manual || savedLanguage(request.headers.get("Cookie")) || preferred.language || fallback;
  url.protocol = "https:";
  url.pathname = `/${language}/`;
  // Other query parameters are retained; the one-time choice does not propagate.
  url.searchParams.delete("lang");

  const headers = new Headers({
    Location: url.href,
    "Cache-Control": "no-store",
    Vary: "Accept-Language, Cookie",
    "Content-Language": language,
  });
  if (manual) {
    headers.set("Set-Cookie", `${COOKIE}=${language}; Path=/; Max-Age=31536000; Secure; SameSite=Lax`);
  }
  return new Response(null, { status: 302, headers });
}

export default {
  /** @param {Request} request */
  async fetch(request) {
    return rootResponse(request) || await fetch(request);
  },
};
