import { ArrowUpRight, Download } from "lucide-react";
import type { Metadata } from "next";
import { SectionHead } from "@/components/section-head";
import { experience } from "@/content/experience";
import { cvHref, hasCv } from "@/lib/cv";
import { formatPeriod } from "@/lib/format";

export const metadata: Metadata = {
  title: "Experience",
  description: "Where I have worked.",
};

export default function ExperiencePage() {
  return (
    <div className="grid grid-cols-12 gap-3.5">
      <SectionHead
        as="h1"
        kicker="Experience"
        title="Where I've worked."
        action={
          hasCv() && (
            <a href={cvHref} download className="btn btn-ghost">
              Download CV <Download aria-hidden className="size-4" />
            </a>
          )
        }
      />
      <ol className="tile col-span-12 grid gap-3.5 p-4! sm:p-7!">
        {experience.map((position) => {
          const period = formatPeriod(position);
          return (
            <li
              key={position.company}
              data-spotlight
              className="relative grid gap-x-8 gap-y-3 rounded-inner border border-line bg-tile-2 p-5 pl-12 sm:p-7 sm:pl-14 lg:grid-cols-[12rem_minmax(0,1fr)_minmax(0,1.2fr)]"
            >
              <span
                aria-hidden
                data-current={position.current}
                className="absolute top-7.5 left-5 size-3 rounded-full border-2 border-line-2 bg-tile data-[current=true]:border-accent data-[current=true]:bg-accent data-[current=true]:shadow-[0_0_0_4px_var(--accent-soft)] sm:top-9.5 sm:left-6"
              />
              <p className="type-label text-faint lg:pt-2">
                {position.current ? <span className="text-accent">Now</span> : "Previously"}
                {period && ` · ${period}`}
              </p>
              <div>
                <h2 className="text-[clamp(30px,3vw,40px)] type-title">
                  {position.companyUrl ? (
                    <a
                      href={position.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-accent"
                    >
                      {position.company}
                      <ArrowUpRight aria-hidden className="size-5" />
                    </a>
                  ) : (
                    position.company
                  )}
                </h2>
                {position.role && <p className="mt-1 text-[17px] font-medium">{position.role}</p>}
              </div>
              <div className="text-[15px] text-muted">
                {position.companyBlurb && <p>{position.companyBlurb}</p>}
                {position.highlights.length > 0 && (
                  <ul className="mt-2 grid gap-2 first:mt-0">
                    {position.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2.5">
                        <span aria-hidden className="mt-2.5 h-px w-3 flex-none bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
