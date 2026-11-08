export const NAV_ITEMS = [
  { key: "about", href: "/about" },
  { key: "projects", href: "/projects" },
  { key: "experiences", href: "/experiences" },
  { key: "certificates", href: "/certificates" },
  { key: "cv", href: "/cv" },
] as const;

export function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
