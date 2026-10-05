"use client";

import { AutoDir } from "@/components/AutoDir";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

export default function NotFound() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "fa";
  const copy = getDictionary(locale).notFound;

  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-5 sm:py-24">
      <AutoDir as="h1" className="text-3xl font-semibold sm:text-4xl">
        {copy.title}
      </AutoDir>
      <AutoDir as="p" className="mt-4 leading-8 text-muted">
        {copy.text}
      </AutoDir>
      <Link
        href={localePath(locale, "/")}
        className="mt-8 inline-block rounded-full bg-purple px-6 py-3 font-semibold text-cream"
      >
        <AutoDir>{copy.action}</AutoDir>
      </Link>
    </div>
  );
}
