import type { Metadata } from "next";
import { en } from "@/i18n/en";
import { fa } from "@/i18n/fa";
import { defaultLocale, isLocale, localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

const dictionaries: Record<Locale, Dictionary> = { fa, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function resolveLocale(lang: string): Locale {
  return isLocale(lang) ? lang : defaultLocale;
}

export function pageMetadata(locale: Locale, title: string, path: string): Metadata {
  return {
    title,
    alternates: {
      languages: {
        fa: localePath("fa", path),
        en: localePath("en", path),
        "x-default": localePath("fa", path),
      },
    },
    openGraph: {
      title,
      locale: locale === "fa" ? "fa_IR" : "en_US",
    },
  };
}
