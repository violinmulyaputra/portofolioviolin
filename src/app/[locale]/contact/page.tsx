import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { ContactList } from "@/components/contact/ContactList";
import { ContactScene } from "@/components/contact/ContactScene";
import { PageShell } from "@/components/layout/PageShell";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ContactPage");
  return { title: t("title"), description: t("metaDescription") };
}

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <PageShell
      title={t("title")}
      intro={t("intro")}
      className="overflow-x-clip"
    >
      <div className="contact-layout mt-8 md:mt-10">
        <ContactScene className="max-w-contact-scene-mobile md:max-w-contact-scene" />
        <ContactList />
      </div>
    </PageShell>
  );
}
