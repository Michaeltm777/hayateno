import { AutoDir } from "@/components/AutoDir";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(92,45,134,0.7),transparent_62%)]" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        <AutoDir as="p" className="text-sm text-gold">
          {eyebrow}
        </AutoDir>
        <AutoDir as="h1" className="mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
          {title}
        </AutoDir>
        <AutoDir as="p" className="mt-5 max-w-2xl text-lg leading-8 text-cream/75">
          {lead}
        </AutoDir>
      </div>
    </section>
  );
}
