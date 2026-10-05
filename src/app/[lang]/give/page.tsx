import { AutoDir, AutoDirBox } from "@/components/AutoDir";
import { PageHeader } from "@/components/PageHeader";
import { isLocale, paths } from "@/i18n/config";
import { getDictionary, pageMetadata, resolveLocale } from "@/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/give">) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  return pageMetadata(locale, getDictionary(locale).give.title, paths.give);
}

export default async function GivePage({ params }: PageProps<"/[lang]/give">) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const dict = getDictionary(lang);
  const page = dict.give;

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} lead={page.lead} />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16">
        <AutoDir as="p" className="text-2xl text-purple">
          {page.thanks}
        </AutoDir>
        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl bg-ink p-8 text-cream">
            <AutoDir as="h2" className="text-2xl font-semibold">
              {page.checkTitle}
            </AutoDir>
            <AutoDir as="p" className="mt-6 text-sm text-gold">
              {page.payable}
            </AutoDir>
            <AutoDir as="p" className="mt-2 text-xl">
              {page.payee}
            </AutoDir>
            <AutoDir as="p" className="mt-6 text-sm text-gold">
              {page.mail}
            </AutoDir>
            <AutoDirBox
              as="p"
              text={dict.church.address.join(" ")}
              className="mt-2 w-full text-start leading-8"
            >
              {dict.church.address.map((line) => (
                <AutoDir key={line} as="span" className="block">
                  {line}
                </AutoDir>
              ))}
            </AutoDirBox>
          </article>
          <article className="rounded-3xl border border-line bg-cream p-8">
            <AutoDir as="p" className="leading-8 text-muted">
              {page.legal}
            </AutoDir>
            <AutoDir as="p" className="mt-6 text-sm leading-7 text-muted">
              {page.note}
            </AutoDir>
          </article>
        </section>
        <section>
          <AutoDir as="h2" className="text-3xl font-semibold">
            {page.ministriesTitle}
          </AutoDir>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {page.ministries.map((item) => (
              <article key={item.title} className="rounded-3xl bg-white p-6">
                <AutoDir as="h3" className="text-xl font-semibold">
                  {item.title}
                </AutoDir>
                <AutoDir as="p" className="mt-3 leading-8 text-muted">
                  {item.text}
                </AutoDir>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
