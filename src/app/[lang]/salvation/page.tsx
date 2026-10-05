import Link from "next/link";
import { AutoDir } from "@/components/AutoDir";
import { PageHeader } from "@/components/PageHeader";
import { formatNumber, isLocale, localePath, paths } from "@/i18n/config";
import { getDictionary, pageMetadata, resolveLocale } from "@/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/salvation">) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  return pageMetadata(locale, getDictionary(locale).salvation.title, paths.salvation);
}

export default async function SalvationPage({ params }: PageProps<"/[lang]/salvation">) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const page = getDictionary(lang).salvation;

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} lead={page.lead} />
      <div className="mx-auto grid max-w-3xl gap-10 px-5 py-16">
        <AutoDir as="p" className="text-lg leading-9 text-muted">
          {page.intro}
        </AutoDir>
        <section>
          <AutoDir as="h2" className="text-3xl font-semibold">
            {page.stepsTitle}
          </AutoDir>
          <ol className="mt-6 grid gap-4">
            {page.steps.map((step, index) => (
              <li key={step.ref} className="rounded-3xl border border-line bg-cream p-6">
                <p className="text-sm text-gold">{formatNumber(lang, index + 1)}</p>
                <AutoDir as="h3" className="mt-2 text-xl font-semibold">
                  {step.title}
                </AutoDir>
                <AutoDir as="p" className="mt-2 text-muted">
                  {step.text}
                </AutoDir>
                <blockquote className="mt-4 border-s-4 border-gold ps-4">
                  <AutoDir as="p" className="leading-8">
                    {step.verse}
                  </AutoDir>
                  <AutoDir as="footer" className="mt-2 text-sm text-gold">
                    {step.ref}
                  </AutoDir>
                </blockquote>
              </li>
            ))}
          </ol>
        </section>
        <section>
          <AutoDir as="h2" className="text-3xl font-semibold">
            {page.afterTitle}
          </AutoDir>
          <ul className="mt-4 grid gap-3 leading-8 text-muted">
            {page.after.map((item) => (
              <AutoDir as="li" key={item}>
                {item}
              </AutoDir>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl bg-ink p-8 text-cream">
          <AutoDir as="h2" className="text-2xl font-semibold">
            {page.inviteTitle}
          </AutoDir>
          <AutoDir as="p" className="mt-3 leading-8 text-cream/80">
            {page.invite}
          </AutoDir>
          <Link
            href={localePath(lang, paths.contact)}
            className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-semibold text-ink"
          >
            <AutoDir>{page.inviteCta}</AutoDir>
          </Link>
        </section>
      </div>
    </>
  );
}
