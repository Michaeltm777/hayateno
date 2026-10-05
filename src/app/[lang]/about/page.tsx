import { AutoDir, AutoDirBox, AutoDirLink } from "@/components/AutoDir";
import { PageHeader } from "@/components/PageHeader";
import { formatNumber, isLocale, paths } from "@/i18n/config";
import { getDictionary, pageMetadata, resolveLocale } from "@/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const dict = getDictionary(locale);
  return pageMetadata(locale, dict.about.title, paths.about);
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const dict = getDictionary(lang);
  const about = dict.about;

  return (
    <>
      <PageHeader eyebrow={about.eyebrow} title={about.title} lead={about.lead} />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16">
        <div className="grid gap-4 text-lg leading-9 text-muted">
          {about.story.map((paragraph) => (
            <AutoDir as="p" key={paragraph}>
              {paragraph}
            </AutoDir>
          ))}
        </div>

        <section>
          <AutoDir as="h2" className="text-3xl font-semibold">
            {about.goalsTitle}
          </AutoDir>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {about.goals.map((goal) => (
              <article key={goal.title} className="rounded-3xl border border-line bg-cream p-6">
                <AutoDir as="h3" className="text-xl font-semibold">
                  {goal.title}
                </AutoDir>
                <AutoDir as="p" className="mt-3 leading-8 text-muted">
                  {goal.text}
                </AutoDir>
              </article>
            ))}
          </div>
        </section>

        <section>
          <AutoDir as="h2" className="text-3xl font-semibold">
            {about.focusesTitle}
          </AutoDir>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {about.focuses.map((item, index) => (
              <li key={item.title} className="rounded-3xl bg-white p-6">
                <p className="text-sm text-gold">{formatNumber(lang, index + 1)}</p>
                <AutoDir as="h3" className="mt-2 text-xl font-semibold">
                  {item.title}
                </AutoDir>
                <AutoDir as="p" className="mt-2 leading-8 text-muted">
                  {item.text}
                </AutoDir>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl bg-purple-deep p-8 text-cream">
            <AutoDir as="h2" className="text-2xl font-semibold">
              {about.scheduleTitle}
            </AutoDir>
            <ul className="mt-4 grid gap-3 leading-8 text-cream/80">
              {about.schedule.map((line) => (
                <AutoDir as="li" key={line}>
                  {line}
                </AutoDir>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-line bg-cream p-8">
            <AutoDir as="h2" className="text-2xl font-semibold">
              {about.placeTitle}
            </AutoDir>
            <AutoDir as="p" className="mt-4 leading-8 text-muted">
              {about.placeNote}
            </AutoDir>
            <AutoDirBox
              as="p"
              text={dict.church.address.join(" ")}
              className="mt-4 w-full text-start font-medium"
            >
              {dict.church.address.map((line) => (
                <AutoDir key={line} as="span" className="block">
                  {line}
                </AutoDir>
              ))}
            </AutoDirBox>
            <AutoDirLink className="mt-4 block font-semibold text-purple" href={dict.church.mapHref}>
              {about.map}
            </AutoDirLink>
          </article>
        </section>

        <section className="rounded-3xl border border-line bg-white p-8">
          <AutoDir as="p" className="text-sm text-gold">
            {about.pastorTitle}
          </AutoDir>
          <AutoDir as="h2" className="mt-2 text-3xl font-semibold">
            {about.pastorName}
          </AutoDir>
          <AutoDir as="p" className="mt-4 max-w-3xl leading-8 text-muted">
            {about.pastorText}
          </AutoDir>
        </section>
      </div>
    </>
  );
}
