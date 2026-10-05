import { AutoDir } from "@/components/AutoDir";
import { PageHeader } from "@/components/PageHeader";
import { isLocale, paths } from "@/i18n/config";
import { getDictionary, pageMetadata, resolveLocale } from "@/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/beliefs">) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  return pageMetadata(locale, getDictionary(locale).beliefs.title, paths.beliefs);
}

export default async function BeliefsPage({ params }: PageProps<"/[lang]/beliefs">) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const beliefs = getDictionary(lang).beliefs;

  return (
    <>
      <PageHeader eyebrow={beliefs.eyebrow} title={beliefs.title} lead={beliefs.lead} />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[240px_1fr]">
        <aside className="h-fit lg:sticky lg:top-24">
          <nav className="grid gap-2" aria-label={beliefs.eyebrow}>
            {beliefs.items.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm text-muted hover:text-purple">
                <AutoDir>{item.title}</AutoDir>
              </a>
            ))}
          </nav>
        </aside>
        <div className="grid gap-6">
          {beliefs.items.map((item) => (
            <article key={item.id} id={item.id} className="scroll-mt-28 rounded-3xl border border-line bg-cream p-7">
              <AutoDir as="h2" className="text-2xl font-semibold">
                {item.title}
              </AutoDir>
              <AutoDir as="p" className="mt-3 text-lg leading-9 text-muted">
                {item.body}
              </AutoDir>
              <AutoDir as="p" className="mt-4 text-sm text-gold">
                {item.refs}
              </AutoDir>
            </article>
          ))}
          <AutoDir as="p" className="text-sm leading-7 text-muted">
            {beliefs.note}
          </AutoDir>
        </div>
      </div>
    </>
  );
}
