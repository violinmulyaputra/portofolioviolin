"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { MenuIcon } from "@/components/layout/MenuIcon";
import { NavLinks } from "@/components/layout/NavLinks";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export function MobileMenu() {
  const t = useTranslations("Nav");
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? t("closeMenu") : t("openMenu")}
        onClick={() => setIsOpen((open) => !open)}
        className={buttonVariants({ variant: "secondary", size: "icon" })}
      >
        <MenuIcon isOpen={isOpen} className="size-6" />
      </button>
      <div
        id={panelId}
        hidden={!isOpen}
        className="absolute inset-x-0 top-full z-40 border-b-2 border-line bg-background"
      >
        <nav aria-label={t("label")} className="container-content py-6">
          <NavLinks
            onNavigate={close}
            className="flex flex-col gap-2"
            linkClassName="min-h-12 px-2 text-lg"
          />
          <Link
            href="/contact"
            onClick={close}
            className={buttonVariants({ className: "mt-4 w-full" })}
          >
            {t("contact")}
          </Link>
        </nav>
      </div>
    </div>
  );
}
