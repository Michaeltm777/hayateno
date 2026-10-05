import Link from "next/link";
import { AutoDir, AutoDirBox, AutoDirLink } from "@/components/AutoDir";
import { SermonCard } from "@/components/SermonCard";
import { isLocale, localePath, paths } from "@/i18n/config";
import { getDictionary, pageMetadata, resolveLocale } from "@/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const dict = getDictionary(locale);
  const meta = pageMetadata(locale, dict.meta.siteName, paths.home);
  return { ...meta, title: { absolute: dict.meta.siteName } };
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const dict = getDictionary(lang);
  const home = dict.home;

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(92,45,134,0.75),transparent_58%)]" />
        <svg
          className="pointer-events-none absolute -bottom-16 end-6 h-72 w-72 text-gold/15"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <path
            d="M50 10 v80 M24 34 h52"
            stroke="currentColor"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 md:pt-28 md:pb-20">
          <AutoDir as="p" className="text-sm tracking-wide text-gold">
            {home.eyebrow}
          </AutoDir>
          <AutoDir as="h1" className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.15] md:text-7xl">
            {home.title}
          </AutoDir>
          <AutoDir as="p" className="mt-6 max-w-2xl text-lg leading-9 text-cream/80 md:text-xl">
            {home.lead}
          </AutoDir>
          <AutoDir as="p" className="mt-3 text-sm text-cream/60">
            {home.place}
          </AutoDir>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={localePath(lang, paths.salvation)}
              className="rounded-full bg-gold px-6 py-3 font-semibold text-ink hover:bg-[#d4b36e]"
            >
              <AutoDir>{home.primaryCta}</AutoDir>
            </Link>
            <Link
              href={localePath(lang, paths.media)}
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-cream hover:border-gold hover:text-gold"
            >
              <AutoDir>{home.secondaryCta}</AutoDir>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-12 md:grid-cols-3 md:py-16">
        {home.goals.map((goal) => (
          <article key={goal.title} className="rounded-3xl border border-line bg-cream p-6">
            <AutoDir as="h2" className="text-xl font-semibold leading-8">
              {goal.title}
            </AutoDir>
            <AutoDir as="p" className="mt-3 leading-8 text-muted">
              {goal.text}
            </AutoDir>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-16 text-center md:pb-20">
        <blockquote>
          <AutoDir as="p" className="text-2xl leading-10 font-medium md:text-3xl md:leading-[1.6]">
            {home.verse}
          </AutoDir>
          <AutoDir as="footer" className="mt-4 text-gold">
            {home.verseRef}
          </AutoDir>
        </blockquote>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <AutoDir as="h2" className="text-3xl font-semibold">
              {home.storyTitle}
            </AutoDir>
            <div className="mt-5 grid gap-4 leading-8 text-muted">
              {home.story.map((paragraph) => (
                <AutoDir as="p" key={paragraph}>
                  {paragraph}
                </AutoDir>
              ))}
            </div>
            <Link
              href={localePath(lang, paths.about)}
              className="mt-6 inline-block font-semibold text-purple"
            >
              <AutoDir>{dict.ui.readMore}</AutoDir>
            </Link>
          </div>
          <aside className="rounded-3xl bg-purple-deep p-8 text-cream">
            <AutoDir as="p" className="text-sm text-gold">
              {dict.about.placeTitle}
            </AutoDir>
            <AutoDirBox
              text={[...dict.church.address, dict.church.phone].join(" ")}
              className="mt-3 w-full text-start"
            >
              <AutoDir as="p" className="text-2xl font-semibold leading-9">
                {dict.church.address.join(" ")}
              </AutoDir>
              <AutoDirLink className="mt-4 block text-gold" href={dict.church.phoneHref}>
                {dict.church.phone}
              </AutoDirLink>
            </AutoDirBox>
            <AutoDir as="p" className="mt-6 leading-8 text-cream/75">
              {dict.about.schedule[1]}
            </AutoDir>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <AutoDir as="h2" className="text-3xl font-semibold">
              {home.sermonsTitle}
            </AutoDir>
            <AutoDir as="p" className="mt-3 max-w-2xl leading-8 text-muted">
              {home.sermonsLead}
            </AutoDir>
          </div>
          <Link href={localePath(lang, paths.media)} className="font-semibold text-purple">
            <AutoDir>{home.allSermons}</AutoDir>
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {dict.sermons.slice(0, 3).map((sermon) => (
            <SermonCard
              key={sermon.slug}
              sermon={sermon}
              href={localePath(lang, `${paths.media}/${sermon.slug}`)}
              cta={dict.media.open}
            />
          ))}
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center">
          <div>
            <AutoDir as="h2" className="text-3xl font-semibold">
              {home.collegeTitle}
            </AutoDir>
            <AutoDir as="p" className="mt-3 max-w-2xl leading-8 text-cream/75">
              {home.collegeText}
            </AutoDir>
          </div>
          <Link
            href={localePath(lang, paths.college)}
            className="rounded-full bg-gold px-6 py-3 font-semibold text-ink"
          >
            <AutoDir>{home.collegeCta}</AutoDir>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <AutoDir as="h2" className="text-3xl font-semibold">
          {home.nextTitle}
        </AutoDir>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {home.cards.map((card) => (
            <article key={card.title} className="rounded-3xl border border-line bg-cream p-6">
              <AutoDir as="h3" className="text-xl font-semibold">
                {card.title}
              </AutoDir>
              <AutoDir as="p" className="mt-3 leading-8 text-muted">
                {card.text}
              </AutoDir>
              <Link href={localePath(lang, card.href)} className="mt-5 inline-block font-semibold text-purple">
                <AutoDir>{card.action}</AutoDir>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
