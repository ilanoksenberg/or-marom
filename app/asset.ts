// The site is hosted under /or-marom on GitHub Pages. Every plain asset URL goes through here.
export const BASE_PATH = process.env.NODE_ENV === "production" ? "/or-marom" : "";
export const asset = (path: string) => `${BASE_PATH}${path}`;
