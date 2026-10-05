import { AutoDir, AutoDirBox, AutoDirLink } from "@/components/AutoDir";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { isLocale, paths } from "@/i18n/config";
import { getDictionary, pageMetadata, resolveLocale } from "@/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  return pageMetadata(locale, getDictionary(locale).contact.title, paths.contact);
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const dict = getDictionary(lang);
  const page = dict.contact;

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} lead={page.lead} />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <dl className="grid gap-6 rounded-3xl bg-ink p-8 text-cream">
            <div>
              <dt className="text-sm text-gold">
                <AutoDir>{page.addressLabel}</AutoDir>
              </dt>
              <dd>
                <AutoDirBox
                  as="div"
                  text={dict.church.address.join(" ")}
                  className="mt-2 w-full text-start leading-7"
                >
                  {dict.church.address.map((line) => (
                    <AutoDir key={line} as="span" className="block">
                      {line}
                    </AutoDir>
                  ))}
                </AutoDirBox>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-gold">
                <AutoDir>{page.phoneLabel}</AutoDir>
              </dt>
              <dd>
                <AutoDirBox as="div" text={dict.church.phone} className="mt-2 w-full text-start">
                  <AutoDirLink href={dict.church.phoneHref}>{dict.church.phone}</AutoDirLink>
                </AutoDirBox>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-gold">
                <AutoDir>{page.emailLabel}</AutoDir>
              </dt>
              <dd>
                <AutoDirBox as="div" text={dict.church.email} className="mt-2 w-full text-start">
                  <AutoDirLink href={`mailto:${dict.church.email}`}>{dict.church.email}</AutoDirLink>
                </AutoDirBox>
              </dd>
            </div>
          </dl>
          <AutoDir as="h2" className="mt-10 text-2xl font-semibold">
            {page.faqTitle}
          </AutoDir>
          <div className="mt-4 grid gap-4">
            {page.faqs.map((faq) => (
              <article key={faq.q}>
                <AutoDir as="h3" className="font-semibold">
                  {faq.q}
                </AutoDir>
                <AutoDir as="p" className="mt-2 leading-8 text-muted">
                  {faq.a}
                </AutoDir>
              </article>
            ))}
          </div>
        </div>
        <ContactForm copy={page.form} />
      </div>
    </>
  );
}
