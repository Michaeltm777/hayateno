import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { dominantDir, splitBidiRuns, uniformDir } from "@/lib/bidi";

type AutoDirProps<T extends ElementType> = {
  as?: T;
  children: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

export function bidiNodes(text: string): ReactNode {
  if (uniformDir(text)) return text;

  const base = dominantDir(text);
  return splitBidiRuns(text).map((run, index) => {
    if (run.dir === base || !/\d/.test(run.text)) return run.text;
    return (
      <bdi key={`${run.dir}-${index}`} dir={run.dir}>
        {run.text}
      </bdi>
    );
  });
}

export function AutoDir<T extends ElementType = "span">({
  as,
  children,
  ...props
}: AutoDirProps<T>) {
  const Tag = (as ?? "span") as ElementType;
  const dir = uniformDir(children) ?? dominantDir(children);
  return (
    <Tag {...props} dir={dir}>
      {bidiNodes(children)}
    </Tag>
  );
}

export function AutoDirBox<T extends ElementType = "div">({
  as,
  text,
  children,
  ...props
}: {
  as?: T;
  text: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">) {
  const Tag = (as ?? "div") as ElementType;
  const dir = uniformDir(text) ?? dominantDir(text);
  return (
    <Tag {...props} dir={dir}>
      {children}
    </Tag>
  );
}

export function AutoDirLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: string;
}) {
  const dir = uniformDir(children) ?? dominantDir(children);
  return (
    <a href={href} dir={dir} className={className}>
      {bidiNodes(children)}
    </a>
  );
}
