"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AutoDir } from "@/components/AutoDir";
import { Logo } from "@/components/Logo";
import { localePath, swapLocale, type Locale } from "@/i18n/config";
import type { NavItem } from "@/i18n/types";

type HeaderProps = {
  locale: Locale;
  brand: { title: string; subtitle: string };
  nav: NavItem[];
  contactHref: string;
  contactLabel: string;
  menuLabel: string;
  closeLabel: string;
  langLabel: string;
};

const languages = [
  { code: "fa" as const, label: "فارسی" },
  { code: "en" as const, label: "English" },
];

export function Header({
  locale,
  brand,
  nav,
  contactHref,
  contactLabel,
  menuLabel,
  closeLabel,
  langLabel,
}: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    const full = localePath(locale, href);
    if (href === "/") return pathname === full;
    return pathname === full || pathname.startsWith(`${full}/`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 text-cream backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href={localePath(locale, "/")} className="flex items-center gap-3">
          <Logo preload />
          <span>
            <AutoDir as="span" className="block text-lg font-semibold leading-6">
              {brand.title}
            </AutoDir>
            <AutoDir
              as="span"
              className="block text-[11px] tracking-[0.22em] text-gold uppercase"
            >
              {brand.subtitle}
            </AutoDir>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={localePath(locale, item.href)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-sm transition ${
                isActive(item.href) ? "text-gold" : "text-cream/80 hover:text-gold"
              }`}
            >
              <AutoDir>{item.label}</AutoDir>
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch
            pathname={pathname}
            locale={locale}
            langLabel={langLabel}
          />
          <Link
            href={contactHref}
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition hover:bg-[#d4b36e]"
          >
            <AutoDir>{contactLabel}</AutoDir>
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/15 px-4 py-2 text-sm lg:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <AutoDir>{open ? closeLabel : menuLabel}</AutoDir>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 px-5 py-4 lg:hidden">
          <nav className="grid gap-3" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                className="text-base text-cream"
              >
                <AutoDir>{item.label}</AutoDir>
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3">
            <LanguageSwitch pathname={pathname} locale={locale} langLabel={langLabel} />
            <Link
              href={contactHref}
              className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink"
            >
              <AutoDir>{contactLabel}</AutoDir>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function LanguageSwitch({
  pathname,
  locale,
  langLabel,
}: {
  pathname: string;
  locale: Locale;
  langLabel: string;
}) {
  return (
    <div className="flex rounded-full border border-white/15 p-1" aria-label={langLabel}>
      {languages.map((language) => {
        const active = language.code === locale;
        return (
          <Link
            key={language.code}
            href={swapLocale(pathname, language.code)}
            hrefLang={language.code}
            lang={language.code}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-3 py-1 text-sm ${
              active ? "bg-gold text-ink" : "text-cream/80"
            }`}
          >
            <AutoDir>{language.label}</AutoDir>
          </Link>
        );
      })}
    </div>
  );
}
