export const locales = ["fa", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fa";

export const sermonSlugs = [
  "glory-of-god-5",
  "glory-of-god-4",
  "glory-of-god-3",
  "glory-of-god-2",
  "glory-of-god-1",
] as const;

export const paths = {
  home: "/",
  about: "/about",
  beliefs: "/beliefs",
  salvation: "/salvation",
  media: "/media",
  give: "/give",
  testimonies: "/testimonies",
  contact: "/contact",
  college: "/college",
} as const;

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function localePath(locale: Locale, path: string) {
  if (path === "/") return `/${locale}`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export function formatNumber(locale: Locale, value: number) {
  return new Intl.NumberFormat(locale === "fa" ? "fa-IR" : "en-US").format(value);
}

export function swapLocale(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  if (segments[1] === "fa" || segments[1] === "en") {
    segments[1] = locale;
    const next = segments.join("/");
    return next === "" ? `/${locale}` : next;
  }
  return `/${locale}`;
}
