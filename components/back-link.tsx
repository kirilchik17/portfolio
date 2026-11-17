import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BackLink({ href, children }: { href: string; children: string }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2 type-label text-muted hover:text-ink">
      <ArrowLeft aria-hidden className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
      {children}
    </Link>
  );
}
