"use client";

import { Suspense } from "react";
import { useTranslations } from "next-intl";

import { isActivePath, NAV_ITEMS } from "@/components/layout/nav-items";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type NavLinksProps = {
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
};

type NavLinksViewProps = NavLinksProps & {
  pathname: string | null;
};

function NavLinksView({
  pathname,
  className,
  linkClassName,
  onNavigate,
}: NavLinksViewProps) {
  const t = useTranslations("Nav");

  return (
    <ul className={className}>
      {NAV_ITEMS.map((item) => {
        const isActive = pathname !== null && isActivePath(pathname, item.href);
        return (
          <li key={item.key}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "inline-flex items-center font-medium text-muted-foreground",
                isActive ? "underline-active" : "underline-hover",
                linkClassName,
              )}
            >
              {t(item.key)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function NavLinksWithPathname(props: NavLinksProps) {
  const pathname = usePathname();
  return <NavLinksView pathname={pathname} {...props} />;
}

export function NavLinks(props: NavLinksProps) {
  return (
    <Suspense fallback={<NavLinksView pathname={null} {...props} />}>
      <NavLinksWithPathname {...props} />
    </Suspense>
  );
}
