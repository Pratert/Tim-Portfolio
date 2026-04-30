"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects/", label: "Projects" },
  { href: "/leader/", label: "Leadership" },
  { href: "/solutions-engineering/", label: "Solutions Engineering" },
  { href: "/technology/", label: "Technical Expertise" },
  { href: "/training-consultation/", label: "Training and Consultation" },
  { href: "/contact/", label: "Contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="mx-auto max-w-5xl px-6">
      <div className="flex items-center justify-between gap-5 border-b py-4">
        <div className="shrink-0 text-lg font-semibold">
          <Link href="/">Timothy (Tim) Prater</Link>
        </div>

        <nav className="ml-auto flex gap-4 text-sm">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "text-neutral-900 underline underline-offset-8"
                    : "text-neutral-600 hover:text-neutral-900"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}