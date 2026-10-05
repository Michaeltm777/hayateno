import Link from "next/link";
import { AutoDir } from "@/components/AutoDir";
import { PageHeader } from "@/components/PageHeader";
import { isLocale, localePath, paths } from "@/i18n/config";
import { getDictionary, pageMetadata, resolveLocale } from "@/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/college">) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  return pageMetadata(locale, getDictionary(locale).college.title, paths.college);
}

export default async function CollegePage({ params }: PageProps<"/[lang]/college">) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const page = getDictionary(lang).college;

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} lead={page.lead} />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-5 sm:py-16">
        <div className="grid gap-4">
          {page.points.map((point) => (
            <article key={point.title} className="rounded-3xl border border-line bg-cream p-6">
              <AutoDir as="h2" className="text-xl font-semibold">
                {point.title}
              </AutoDir>
              <AutoDir as="p" className="mt-3 leading-8 text-muted">
                {point.text}
              </AutoDir>
            </article>
          ))}
        </div>
        <AutoDir as="p" className="mt-8 text-sm leading-7 text-muted">
          {page.note}
        </AutoDir>
        <Link
          href={localePath(lang, paths.contact)}
          className="mt-6 inline-block rounded-full bg-purple px-6 py-3 font-semibold text-cream"
        >
          <AutoDir>{page.cta}</AutoDir>
        </Link>
      </div>
    </>
  );
}
