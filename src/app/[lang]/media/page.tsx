import { AutoDir } from "@/components/AutoDir";
import { PageHeader } from "@/components/PageHeader";
import { SermonCard } from "@/components/SermonCard";
import { isLocale, localePath, paths } from "@/i18n/config";
import { getDictionary, pageMetadata, resolveLocale } from "@/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/media">) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  return pageMetadata(locale, getDictionary(locale).media.title, paths.media);
}

export default async function MediaPage({ params }: PageProps<"/[lang]/media">) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const dict = getDictionary(lang);

  return (
    <>
      <PageHeader eyebrow={dict.media.eyebrow} title={dict.media.title} lead={dict.media.lead} />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-5 sm:py-16">
        <section className="rounded-3xl bg-purple-deep p-6 text-cream sm:p-8">
          <AutoDir as="h2" className="text-2xl font-semibold">
            {dict.media.liveTitle}
          </AutoDir>
          <AutoDir as="p" className="mt-3 max-w-2xl leading-8 text-cream/80">
            {dict.media.liveText}
          </AutoDir>
        </section>
        <section>
          <AutoDir as="h2" className="text-2xl font-semibold sm:text-3xl">
            {dict.media.archiveTitle}
          </AutoDir>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {dict.sermons.map((sermon) => (
              <SermonCard
                key={sermon.slug}
                sermon={sermon}
                href={localePath(lang, `${paths.media}/${sermon.slug}`)}
                cta={dict.media.open}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
