import { Download } from "lucide-react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { education, skills } from "@/content/about";
import { experience } from "@/content/experience";
import { site, siteUrl } from "@/content/site";
import { getProjects } from "@/lib/content";
import { cvHref, hasCv } from "@/lib/cv";
import { formatPeriod } from "@/lib/format";

export const metadata: Metadata = {
  title: { absolute: `CV · ${site.name}` },
  description: `Curriculum vitae of ${site.name}, ${site.headline.toLowerCase()}.`,
};

// The PDF is public, so the CV never prints site.email.
const links = [
  ...(siteUrl.hostname === "localhost" ? [] : [siteUrl.href]),
  ...site.socials.map((social) => social.href),
].map((href) => ({ href, text: href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") }));

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-6 break-inside-avoid-page first-of-type:mt-7">
      <h2 className="mb-3 flex items-center gap-3 type-label text-faint after:h-px after:flex-1 after:bg-line-2">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default async function CvPage() {
  const projects = (await getProjects()).filter((project) => project.meta.featured);

  return (
    <div className="mx-auto max-w-[210mm]">
      {hasCv() && (
        <div className="mb-3.5 flex justify-end print:hidden">
          <a href={cvHref} download className="btn btn-ghost">
            Download PDF <Download aria-hidden className="size-4" />
          </a>
        </div>
      )}
      <article className="rounded-tile border border-line bg-tile px-[14mm] py-[13mm] text-[13px] leading-[1.5] shadow-tile print:rounded-none print:border-0 print:p-0 print:shadow-none">
        <header>
          <h1 className="text-[46px] leading-[0.9] font-black font-stretch-80% tracking-[-0.025em]">{site.name}</h1>
          <p className="mt-2 text-[16px] font-semibold">{site.headline}</p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11.5px] text-muted">
            {site.location && <li>{site.location}</li>}
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-accent">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <Section title="Summary">
          <p className="text-muted">{site.intro}</p>
        </Section>

        <Section title="Experience">
          <div className="grid gap-4">
            {experience.map((position) => (
              <div key={position.company} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-[15px] type-title">
                    {position.role ? `${position.role}, ${position.company}` : position.company}
                  </h3>
                  <p className="font-mono text-[11.5px] text-faint">{formatPeriod(position)}</p>
                </div>
                {position.companyBlurb && <p className="text-muted">{position.companyBlurb}</p>}
                {position.highlights.length > 0 && (
                  <ul className="mt-1 grid gap-0.5 text-muted">
                    {position.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span aria-hidden className="mt-[0.75em] h-px w-2.5 flex-none bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Selected projects">
          <ul className="grid gap-2.5">
            {projects.map(({ slug, meta }) => (
              <li key={slug} className="break-inside-avoid">
                <p>
                  <span className="font-bold">{meta.title}</span>
                  <span className="text-muted">. {meta.summary}</span>
                </p>
                <p className="font-mono text-[11px] text-faint">{meta.stack.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Education">
          {education.map((entry) => (
            <div key={entry.degree} className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3>
                <span className="text-[15px] type-title">{entry.degree}</span>
                <span className="text-muted">, {entry.school}</span>
              </h3>
              {entry.years && <p className="font-mono text-[11.5px] text-faint">{entry.years}</p>}
            </div>
          ))}
        </Section>

        <Section title="Skills">
          <dl className="grid gap-1 sm:grid-cols-[11rem_minmax(0,1fr)] print:grid-cols-[11rem_minmax(0,1fr)]">
            {skills.map((group) => (
              <div key={group.name} className="contents">
                <dt className="font-semibold">{group.name}</dt>
                <dd className="text-muted">{group.skills.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>
      </article>
    </div>
  );
}
