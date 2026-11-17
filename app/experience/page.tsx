import type { Metadata } from "next";
import { experience, type Position } from "@/content/experience";
import { cvHref, hasCv } from "@/lib/cv";
import { formatYearMonth } from "@/lib/format";

export const metadata: Metadata = {
  title: "Experience",
  description: "Where I have worked.",
};

function period(position: Position): string | undefined {
  const start = position.start && formatYearMonth(position.start);
  const end = position.current ? "Present" : position.end && formatYearMonth(position.end);
  if (start && end) return `${start} to ${end}`;
  if (start) return `Since ${start}`;
  return end;
}

export default function ExperiencePage() {
  return (
    <>
      <header className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
        <h1 className="text-3xl font-bold">Experience</h1>
        {hasCv() && (
          <a href={cvHref} download className="underline">
            Download CV
          </a>
        )}
      </header>
      <ol className="space-y-8 border-l pl-6">
        {experience.map((position) => (
          <li key={position.company}>
            <h2 className="text-lg font-semibold">
              {position.companyUrl ? (
                <a href={position.companyUrl} target="_blank" rel="noopener noreferrer" className="underline">
                  {position.company}
                </a>
              ) : (
                position.company
              )}
            </h2>
            {position.role && <p>{position.role}</p>}
            {period(position) && <p className="text-sm text-muted-foreground">{period(position)}</p>}
            {position.companyBlurb && <p className="text-muted-foreground">{position.companyBlurb}</p>}
            {position.highlights.length > 0 && (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {position.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </>
  );
}
