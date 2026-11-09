import Image from "next/image";
import { useTranslations } from "next-intl";

import { ContactList } from "@/components/contact/ContactList";
import { Reveal, RevealItem } from "@/components/layout/Reveal";
import {
  SPACING_BOTTOM,
  SPACING_TOP,
} from "@/components/sections/section-spacing";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { cn } from "@/lib/utils";

const TITLE_ID = "connect-title";
const SCENE = { src: "/illustrations/connect-scene.webp", width: 1223, height: 821 };
const SCENE_SIZES = "(min-width: 64rem) 440px, (min-width: 48rem) 320px, 70vw";

export function ConnectSection() {
  const t = useTranslations("Connect");

  return (
    <Reveal
      labelledBy={TITLE_ID}
      className={cn(SPACING_TOP.pair, SPACING_BOTTOM.footer)}
    >
      <RevealItem className="container-content">
        <div className="mx-auto flex max-w-connect-group flex-col items-center gap-8 md:flex-row md:justify-center lg:gap-12">
          <Image
            src={SCENE.src}
            width={SCENE.width}
            height={SCENE.height}
            sizes={SCENE_SIZES}
            alt=""
            draggable={false}
            className="order-last h-auto w-connect-scene-mobile shrink-0 select-none md:order-none md:w-connect-scene lg:w-connect-scene-lg"
          />
          <div className="flex min-w-0 flex-col items-center gap-6 md:items-start md:gap-2 lg:gap-4">
            <SectionHeading id={TITLE_ID} className="text-center md:text-left">
              {t("title")}
            </SectionHeading>
            <ContactList size="compact" />
          </div>
        </div>
      </RevealItem>
    </Reveal>
  );
}
