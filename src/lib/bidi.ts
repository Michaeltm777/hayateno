export type Dir = "ltr" | "rtl";

const RTL_CHAR =
  /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0750-\u077F\u08A0-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF]/;

function charDir(ch: string): Dir | "neutral" {
  if (RTL_CHAR.test(ch)) return "rtl";
  if (/[A-Za-z0-9()[\]{}]/.test(ch)) return "ltr";
  return "neutral";
}

export function detectDir(text: string): Dir {
  for (const ch of text) {
    const dir = charDir(ch);
    if (dir !== "neutral") return dir;
  }
  return "ltr";
}

export function uniformDir(text: string): Dir | undefined {
  let seen: Dir | undefined;
  for (const ch of text) {
    const dir = charDir(ch);
    if (dir === "neutral") continue;
    if (!seen) seen = dir;
    else if (seen !== dir) return undefined;
  }
  return seen;
}

export function dominantDir(text: string): Dir {
  let rtl = 0;
  let ltr = 0;
  for (const ch of text) {
    const dir = charDir(ch);
    if (dir === "rtl") rtl += 1;
    if (dir === "ltr") ltr += 1;
  }
  return rtl >= ltr ? "rtl" : "ltr";
}

function nearestStrong(raw: (Dir | "neutral")[], index: number, step: number): Dir | undefined {
  for (let i = index + step; i >= 0 && i < raw.length; i += step) {
    const dir = raw[i];
    if (dir !== "neutral") return dir;
  }
  return undefined;
}

export function splitBidiRuns(text: string): { text: string; dir: Dir }[] {
  if (!text) return [];

  const chars = [...text];
  const raw = chars.map(charDir);
  const base = dominantDir(text);
  const resolved: Dir[] = raw.map((dir, index) => {
    if (dir !== "neutral") return dir;
    const prev = nearestStrong(raw, index, -1);
    const next = nearestStrong(raw, index, 1);
    if (prev && next && prev === next) return prev;
    if (prev && next) return base;
    return prev ?? next ?? base;
  });

  const runs: { text: string; dir: Dir }[] = [];
  for (let i = 0; i < chars.length; i += 1) {
    const last = runs.at(-1);
    if (last && last.dir === resolved[i]) last.text += chars[i];
    else runs.push({ text: chars[i], dir: resolved[i] });
  }
  return runs;
}
