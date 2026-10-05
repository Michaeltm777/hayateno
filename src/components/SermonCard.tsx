import Link from "next/link";
import { AutoDir } from "@/components/AutoDir";
import type { Sermon } from "@/i18n/types";

export function SermonCard({
  sermon,
  href,
  cta,
}: {
  sermon: Sermon;
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-3xl border border-line bg-cream p-5 transition hover:-translate-y-0.5 hover:border-gold sm:p-6"
    >
      <AutoDir as="p" className="text-sm text-gold">
        {sermon.date}
      </AutoDir>
      <AutoDir as="h3" className="mt-3 text-xl font-semibold leading-8">
        {sermon.title}
      </AutoDir>
      <AutoDir as="p" className="mt-2 text-sm text-muted">
        {sermon.speaker}
      </AutoDir>
      <AutoDir as="p" className="mt-4 flex-1 leading-7 text-muted">
        {sermon.summary}
      </AutoDir>
      <AutoDir as="span" className="mt-6 text-sm font-medium text-purple group-hover:text-ink">
        {cta}
      </AutoDir>
    </Link>
  );
}
