import Link from "next/link";
import { notFound } from "next/navigation";
import { AutoDir } from "@/components/AutoDir";
import { SermonCard } from "@/components/SermonCard";
import { isLocale, localePath, locales, paths, sermonSlugs } from "@/i18n/config";
import { getDictionary, pageMetadata, resolveLocale } from "@/i18n";

export function generateStaticParams() {
  return locales.flatMap((lang) => sermonSlugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/media/[slug]">) {
  const { lang, slug } = await params;
  const locale = resolveLocale(lang);
  const sermon = getDictionary(locale).sermons.find((item) => item.slug === slug);
  return pageMetadata(locale, sermon?.title ?? "Media", `${paths.media}/${slug}`);
}

export default async function SermonPage({ params }: PageProps<"/[lang]/media/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return null;
  const dict = getDictionary(lang);
  const sermon = dict.sermons.find((item) => item.slug === slug);
  if (!sermon) notFound();

  const related = dict.sermons.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-5 sm:py-16">
      <Link href={localePath(lang, paths.media)} className="text-sm font-semibold text-purple">
        <AutoDir>{dict.media.archiveTitle}</AutoDir>
      </Link>
      <AutoDir as="p" className="mt-6 text-sm text-gold">
        {sermon.series}
      </AutoDir>
      <AutoDir as="h1" className="mt-3 text-2xl font-semibold leading-tight sm:text-4xl">
        {sermon.title}
      </AutoDir>
      <p className="mt-4 text-muted">
        <AutoDir>{sermon.date}</AutoDir>
        {" · "}
        <AutoDir>{sermon.speaker}</AutoDir>
      </p>
      <div className="mt-8 rounded-3xl border border-dashed border-gold bg-gold-soft p-5 sm:p-8">
        <AutoDir as="p" className="leading-8">
          {dict.media.playerNote}
        </AutoDir>
      </div>
      <AutoDir as="p" className="mt-8 text-lg leading-9 text-muted">
        {sermon.summary}
      </AutoDir>
      <AutoDir as="h2" className="mt-14 text-2xl font-semibold">
        {dict.media.more}
      </AutoDir>
      <div className="mt-6 grid gap-4">
        {related.map((item) => (
          <SermonCard
            key={item.slug}
            sermon={item}
            href={localePath(lang, `${paths.media}/${item.slug}`)}
            cta={dict.media.open}
          />
        ))}
      </div>
    </article>
  );
}
