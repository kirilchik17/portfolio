import { ArrowRight, GraduationCap } from "lucide-react";
import { Kicker } from "@/components/kicker";
import { SocialIcon, socialHandle } from "@/components/icons";
import type { Education } from "@/content/about";
import { site } from "@/content/site";

const smallTile = "tile tile-lift col-span-12 flex min-h-[200px] flex-col justify-between gap-5 rise md:col-span-6 lg:col-span-4";

export function NowTile() {
  return (
    <section data-spotlight aria-label="Now" className={smallTile} style={{ animationDelay: "120ms" }}>
      <Kicker>Now</Kicker>
      <ol className="grid gap-2.5">
        {site.now.map((item, index) => (
          <li key={item.verb} className="flex items-start gap-2.5 text-[14.5px] text-muted">
            <span
              aria-hidden
              className="mt-0.5 grid size-4.5 flex-none place-items-center rounded-md bg-accent-soft font-mono text-[10px] text-accent"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>
              <strong className="font-semibold text-ink">{item.verb}</strong> {item.detail}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function EducationTile({ education }: { education: Education }) {
  return (
    <section data-spotlight aria-label="Education" className={smallTile} style={{ animationDelay: "160ms" }}>
      <div className="flex items-start justify-between">
        <Kicker>Education</Kicker>
        <span className="grid size-11 place-items-center rounded-xl border border-line-2 bg-tile-2">
          <GraduationCap aria-hidden className="size-5.5 text-accent" />
        </span>
      </div>
      <div>
        <p className="text-[26px] type-title">{education.degree}</p>
        <p className="mt-1.5 text-[14.5px] text-muted">
          {education.school}
          {education.years && ` · ${education.years}`}
        </p>
      </div>
    </section>
  );
}

export function SocialsTile() {
  return (
    <section
      aria-label="Elsewhere"
      className="tile col-span-12 grid grid-cols-2 gap-2.5 p-3.5! rise md:col-span-12 lg:col-span-4"
      style={{ animationDelay: "200ms" }}
    >
      {site.socials.map((social) => (
        <a
          key={social.kind}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between gap-6 rounded-2xl border border-line bg-tile-2 p-4 transition hover:-translate-y-0.5 hover:border-line-2"
        >
          <span className="flex items-start justify-between">
            <SocialIcon kind={social.kind} className="size-5.5" />
            <span className="arrow-dot size-6.5!">
              <ArrowRight aria-hidden className="size-3.5" />
            </span>
          </span>
          <span>
            <span className="block text-[17px] type-title">{social.label}</span>
            <span className="block font-mono text-[11.5px] text-faint">{socialHandle(social.href)}</span>
          </span>
        </a>
      ))}
    </section>
  );
}
