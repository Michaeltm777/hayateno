import Link from "next/link";
import { AutoDir, AutoDirBox, AutoDirLink } from "@/components/AutoDir";
import { Logo } from "@/components/Logo";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="mt-auto bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-5 sm:py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-11 w-11" />
            <div>
              <AutoDir as="p" className="text-lg font-semibold">
                {dict.brand.title}
              </AutoDir>
              <AutoDir as="p" className="text-xs tracking-[0.18em] text-gold uppercase">
                {dict.brand.subtitle}
              </AutoDir>
            </div>
          </div>
          <AutoDir as="p" className="mt-5 max-w-sm leading-8 text-cream/75">
            {dict.meta.description}
          </AutoDir>
          <AutoDir as="p" className="mt-4 text-gold">
            {dict.ui.blessing}
          </AutoDir>
        </div>

        <div>
          <AutoDir as="p" className="text-sm text-gold">
            {dict.nav[0]?.label ?? ""}
          </AutoDir>
          <ul className="mt-4 grid gap-2">
            {dict.nav.map((item) => (
              <li key={item.href}>
                <Link href={localePath(locale, item.href)} className="text-cream/80 hover:text-gold">
                  <AutoDir>{item.label}</AutoDir>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <AutoDir as="p" className="text-sm text-gold">
            {dict.contactCta}
          </AutoDir>
          <ul className="mt-4 grid gap-2">
            {dict.footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={localePath(locale, item.href)} className="text-cream/80 hover:text-gold">
                  <AutoDir>{item.label}</AutoDir>
                </Link>
              </li>
            ))}
          </ul>
          <AutoDirBox
            as="address"
            text={[...dict.church.address, dict.church.phone, dict.church.email].join(" ")}
            className="mt-6 w-full break-words text-start leading-7 text-cream/75 not-italic"
          >
            {dict.church.address.map((line) => (
              <AutoDir key={line} as="span" className="block">
                {line}
              </AutoDir>
            ))}
            <AutoDirLink className="mt-2 block hover:text-gold" href={dict.church.phoneHref}>
              {dict.church.phone}
            </AutoDirLink>
            <AutoDirLink className="block hover:text-gold" href={`mailto:${dict.church.email}`}>
              {dict.church.email}
            </AutoDirLink>
          </AutoDirBox>
        </div>
      </div>
      <AutoDir as="div" className="border-t border-white/10 px-4 py-4 text-center text-sm text-cream/50 sm:px-5">
        {dict.brand.title}
      </AutoDir>
    </footer>
  );
}
