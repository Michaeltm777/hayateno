import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { redirect } from "next/navigation";
import { AutoDir } from "@/components/AutoDir";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { defaultLocale, isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import "../globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  display: "swap",
});

export function generateStaticParams() {
  return [{ lang: "fa" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: {
      default: dict.meta.siteName,
      template: `%s | ${dict.meta.siteName}`,
    },
    description: dict.meta.description,
    alternates: {
      languages: {
        fa: "/fa",
        en: "/en",
        "x-default": "/fa",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) redirect(`/${defaultLocale}`);

  const dict = getDictionary(lang);
  const dir = lang === "fa" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} className={`${vazir.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
        >
          <AutoDir>{dict.ui.skip}</AutoDir>
        </a>
        <AutoDir as="p" className="bg-gold px-4 py-2 text-center text-xs leading-6 font-medium text-ink sm:px-5 sm:text-sm">
          {dict.banner}
        </AutoDir>
        <Header
          locale={lang}
          brand={dict.brand}
          nav={dict.nav}
          contactHref={localePath(lang, "/contact")}
          contactLabel={dict.contactCta}
          menuLabel={dict.ui.menu}
          closeLabel={dict.ui.close}
          langLabel={dict.ui.langLabel}
        />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer locale={lang} dict={dict} />
      </body>
    </html>
  );
}
