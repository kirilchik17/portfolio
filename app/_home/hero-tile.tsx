import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Position } from "@/content/experience";
import { site } from "@/content/site";

export function HeroTile({ current }: { current: Position | undefined }) {
  const [first, ...rest] = site.name.split(" ");

  return (
    <section
      data-spotlight
      aria-labelledby="hero-name"
      className="tile col-span-12 flex flex-col justify-between gap-7 p-6! rise sm:p-8! lg:col-span-5 lg:min-h-[460px]"
    >
      <div>
        {current && (
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-tile-2 py-1.5 pr-3 pl-2.5 text-[13px] text-muted">
            <span className="pulse-dot" />
            Currently building at {current.company}
          </p>
        )}
        <h1 id="hero-name" className="mt-7 mb-5 text-[clamp(64px,8.6vw,124px)] type-display">
          <span className="block">{first}</span>
          <span className="block bg-linear-100 from-ink from-30% to-[color-mix(in_srgb,var(--ink)_45%,var(--accent))] bg-clip-text text-transparent">
            {rest.join(" ")}
          </span>
        </h1>
        <p className="max-w-[440px] text-[17px] leading-normal text-muted">
          <strong className="font-semibold text-ink">{site.headline}.</strong> {site.intro}
        </p>
      </div>
      <div className="flex flex-wrap gap-2.5">
        <Link href="/projects" className="btn btn-primary">
          See my work <ArrowRight aria-hidden className="size-4" />
        </Link>
        <Link href="/contact" className="btn btn-ghost">
          Contact
        </Link>
      </div>
    </section>
  );
}
