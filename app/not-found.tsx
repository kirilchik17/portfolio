import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Kicker } from "@/components/kicker";

export default function NotFound() {
  return (
    <div className="grid grid-cols-12 gap-3.5 sm:pt-6">
      <section className="tile col-span-12 grid gap-8 p-6! sm:p-12! lg:min-h-[480px] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end">
        <p
          aria-hidden
          className="bg-linear-100 from-ink from-30% to-[color-mix(in_srgb,var(--ink)_45%,var(--accent))] bg-clip-text text-[clamp(140px,22vw,300px)] text-transparent type-display"
        >
          404
        </p>
        <div>
          <Kicker>Error 404</Kicker>
          <h1 className="mt-4 text-[clamp(44px,5vw,72px)] type-section">Page not found.</h1>
          <p className="mt-4 max-w-[360px] text-muted">That page does not exist or has moved.</p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <Link href="/" className="btn btn-primary">
              Back home <ArrowRight aria-hidden className="size-4" />
            </Link>
            <Link href="/projects" className="btn btn-ghost">
              Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
