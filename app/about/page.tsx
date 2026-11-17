import { GraduationCap } from "lucide-react";
import type { Metadata } from "next";
import { HobbyIcon } from "@/components/icons";
import { Kicker } from "@/components/kicker";
import { SectionHead } from "@/components/section-head";
import { bio, education, hobbies, skills } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description: "Background, education, skills, and life outside of code.",
};

export default function AboutPage() {
  const [lead, ...rest] = bio;

  return (
    <div className="grid grid-cols-12 gap-3.5">
      <SectionHead as="h1" kicker="About" title="Hello, I'm Kirill." />

      <section aria-label="Bio" data-spotlight className="tile col-span-12 p-6! sm:p-9! lg:col-span-8">
        <p className="text-[clamp(20px,1.9vw,26px)] leading-snug font-medium tracking-[-0.01em]">{lead}</p>
        <div className="mt-5 grid gap-4 text-[16px] text-muted">
          {rest.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="education" data-spotlight className="tile col-span-12 flex flex-col justify-between gap-8 lg:col-span-4">
        <div className="flex items-start justify-between">
          <Kicker>
            <span id="education">Education</span>
          </Kicker>
          <span className="grid size-11 place-items-center rounded-xl border border-line-2 bg-tile-2">
            <GraduationCap aria-hidden className="size-5.5 text-accent" />
          </span>
        </div>
        <ul className="grid gap-4">
          {education.map((entry) => (
            <li key={entry.degree}>
              <p className="text-[26px] type-title">{entry.degree}</p>
              <p className="mt-1.5 text-[14.5px] text-muted">
                {entry.school}
                {entry.years && ` · ${entry.years}`}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <SectionHead kicker="Toolbox" title="Skills." />
      <section aria-label="Skills" className="tile col-span-12 p-2! sm:p-3!">
        <dl>
          {skills.map((group) => (
            <div
              key={group.name}
              className="grid gap-3 border-t border-line px-3 py-5 first:border-t-0 sm:px-4 md:grid-cols-[14rem_1fr] md:items-center"
            >
              <dt className="text-[20px] type-title">{group.name}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <SectionHead kicker="Off the keyboard" title="Outside of code." />
      <ul className="col-span-12 grid gap-3.5 md:grid-cols-2 lg:grid-cols-4">
        {hobbies.map((hobby) => (
          <li key={hobby.name} data-spotlight className="tile tile-lift flex flex-col gap-8">
            <span className="grid size-10 place-items-center rounded-xl border border-line bg-tile-2">
              <HobbyIcon icon={hobby.icon} className="size-5 text-accent" />
            </span>
            <div>
              <h3 className="text-[22px] type-title">{hobby.name}</h3>
              <p className="mt-2 text-[14.5px] text-muted">{hobby.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
