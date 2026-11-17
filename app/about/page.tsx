import type { Metadata } from "next";
import { bio, education, hobbies, skills } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description: "Background, education, skills, and life outside of code.",
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl font-bold">About</h1>
        <div className="mt-4 space-y-4">
          {bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="education">
        <h2 id="education" className="mb-4 text-xl font-semibold">
          Education
        </h2>
        <ul className="space-y-2">
          {education.map((entry) => (
            <li key={entry.degree}>
              <p className="font-medium">{entry.degree}</p>
              <p className="text-muted">
                {entry.school}
                {entry.years && `, ${entry.years}`}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="skills">
        <h2 id="skills" className="mb-4 text-xl font-semibold">
          Skills
        </h2>
        <dl className="space-y-2">
          {skills.map((group) => (
            <div key={group.name}>
              <dt className="font-medium">{group.name}</dt>
              <dd className="text-muted">{group.skills.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="outside-code">
        <h2 id="outside-code" className="mb-4 text-xl font-semibold">
          Outside of code
        </h2>
        <ul className="space-y-4">
          {hobbies.map((hobby) => (
            <li key={hobby.name}>
              <h3 className="font-medium">{hobby.name}</h3>
              <p className="text-muted">{hobby.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
