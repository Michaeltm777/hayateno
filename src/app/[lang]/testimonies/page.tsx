import { AutoDir, AutoDirLink } from "@/components/AutoDir";
import { PageHeader } from "@/components/PageHeader";
import { formatNumber, isLocale, paths } from "@/i18n/config";
import { getDictionary, pageMetadata, resolveLocale } from "@/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/testimonies">) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  return pageMetadata(locale, getDictionary(locale).testimonies.title, paths.testimonies);
}

export default async function TestimoniesPage({ params }: PageProps<"/[lang]/testimonies">) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const dict = getDictionary(lang);
  const page = dict.testimonies;

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} lead={page.lead} />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <AutoDir as="h2" className="text-2xl font-semibold">
          {page.howTitle}
        </AutoDir>
        <ol className="mt-6 grid gap-4">
          {page.steps.map((step, index) => (
            <li key={step} className="rounded-3xl border border-line bg-cream p-5 leading-8">
              <span className="text-gold">{formatNumber(lang, index + 1)}. </span>
              <AutoDir>{step}</AutoDir>
            </li>
          ))}
        </ol>
        <AutoDir as="p" className="mt-8 text-sm text-muted">
          {page.emailLabel}
        </AutoDir>
        <AutoDirLink
          className="mt-2 inline-block text-xl font-semibold text-purple"
          href={`mailto:${dict.church.email}`}
        >
          {dict.church.email}
        </AutoDirLink>
      </div>
    </>
  );
}
