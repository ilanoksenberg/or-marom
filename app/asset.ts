// Where the site lives decides the URL prefix of every plain asset.
// - default (GitHub Pages project URL): served under /or-marom
// - custom domain (build with NEXT_PUBLIC_CUSTOM_DOMAIN=1): served from the root of ormarom.co.il
export const CUSTOM_DOMAIN = process.env.NEXT_PUBLIC_CUSTOM_DOMAIN === "1";
export const SITE_URL = CUSTOM_DOMAIN ? "https://ormarom.co.il" : "https://ilanoksenberg.github.io/or-marom";
export const BASE_PATH = CUSTOM_DOMAIN ? "" : process.env.NODE_ENV === "production" ? "/or-marom" : "";
export const asset = (path: string) => `${BASE_PATH}${path}`;
