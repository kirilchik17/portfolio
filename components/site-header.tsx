"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/content/site";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const initials = site.name
  .split(" ")
  .map((word) => word[0])
  .join("");

function isActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  return (
    <header className="sticky top-0 print:hidden z-50 px-3 pt-2.5 sm:px-5 sm:pt-3.5">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 rounded-2xl border border-line bg-tile/70 py-2 pr-2 pl-3 shadow-tile backdrop-blur-lg backdrop-saturate-150 sm:pl-4">
        <Link href="/" className="flex items-center gap-2.5 rounded-lg text-[17px] type-title">
          <span
            aria-hidden
            className="grid size-7 place-items-center rounded-lg bg-linear-135 from-accent to-accent-2 font-mono text-xs font-medium tracking-normal text-white"
          >
            {initials}
          </span>
          {site.name}
        </Link>
        <nav aria-label="Main" className="hidden gap-0.5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className="rounded-[10px] px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-line hover:text-ink aria-[current=page]:bg-line aria-[current=page]:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden h-9 items-center rounded-[10px] bg-ink px-3.5 text-sm font-semibold text-canvas transition hover:-translate-y-px hover:opacity-90 md:flex"
          >
            Get in touch
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpenOn(open ? null : pathname)}
            className="grid size-9 place-items-center rounded-[10px] border border-line bg-tile md:hidden"
          >
            {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpenOn(null);
          }}
          className="mx-auto mt-2 grid max-w-[1240px] rounded-2xl border border-line bg-tile p-2 shadow-lift md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpenOn(null)}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className="rounded-[10px] px-3.5 py-3 text-2xl type-section hover:bg-line aria-[current=page]:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
