import { useTranslations } from "next-intl";

import { HomeIcon } from "@/components/layout/HomeIcon";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NavLinks } from "@/components/layout/NavLinks";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("Nav");

  return (
    <header className="relative z-40 border-b border-blush bg-background">
      <div className="container-content flex h-20 items-center gap-4">
        <div className="flex flex-1 items-center">
          <Link
            href="/"
            aria-label={t("home")}
            className="inline-flex size-12 items-center justify-center rounded-pill hover:bg-blush"
          >
            <HomeIcon className="size-9" />
          </Link>
        </div>

        <nav aria-label={t("label")} className="hidden lg:block">
          <NavLinks
            className="flex items-center gap-8"
            linkClassName="h-10 px-1"
          />
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "secondary", size: "sm" }),
              "hidden lg:inline-flex",
            )}
          >
            {t("contact")}
          </Link>
          <LanguageToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
