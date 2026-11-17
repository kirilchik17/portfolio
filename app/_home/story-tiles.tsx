import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HobbyIcon } from "@/components/icons";
import { Kicker } from "@/components/kicker";
import { hobbies } from "@/content/about";
import { experience } from "@/content/experience";
import type { Entry, PostMeta } from "@/lib/content";
import { formatDate, formatPeriod } from "@/lib/format";

export function ExperienceTile() {
  return (
    <section aria-labelledby="home-experience" data-spotlight className="tile col-span-12 p-5! rise sm:p-7! lg:col-span-7">
      <div className="flex items-center justify-between gap-3">
        <h3 id="home-experience" className="text-[22px] type-title">
          Experience
        </h3>
        <Link href="/experience" className="chip hover:border-ink hover:text-ink">
          Full timeline <ArrowRight aria-hidden className="size-3" />
        </Link>
      </div>
      <ol className="relative mt-5 grid gap-3.5 pl-[22px] before:absolute before:top-2 before:bottom-2 before:left-[5px] before:w-px before:bg-linear-to-b before:from-accent before:via-line-2 before:to-transparent">
        {experience.map((position) => {
          const meta = [position.role, formatPeriod(position)].filter(Boolean).join(" · ");
          const summary = position.highlights[0] ?? position.companyBlurb;
          return (
            <li
              key={position.company}
              className="relative rounded-inner border border-line bg-tile-2 px-4.5 py-4 transition hover:translate-x-[3px] hover:border-line-2"
            >
              <span
                aria-hidden
                data-current={position.current}
                className="absolute top-[22px] -left-[22px] size-[11px] rounded-full border-2 border-line-2 bg-tile data-[current=true]:border-accent data-[current=true]:bg-accent data-[current=true]:shadow-[0_0_0_4px_var(--accent-soft)]"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h4 className="text-lg type-title">{position.company}</h4>
                {meta && <span className="font-mono text-[11.5px] text-faint">{meta}</span>}
              </div>
              {summary && <p className="mt-1.5 text-sm text-muted">{summary}</p>}
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export function WritingTile({ posts }: { posts: Entry<PostMeta>[] }) {
  return (
    <section aria-labelledby="home-writing" data-spotlight className="tile col-span-12 flex flex-col p-5! rise sm:p-7! lg:col-span-5">
      <div className="mb-2.5 flex items-center justify-between gap-3">
        <h3 id="home-writing" className="text-[22px] type-title">
          Writing
        </h3>
        <Link href="/writing" className="chip hover:border-ink hover:text-ink">
          All writing <ArrowRight aria-hidden className="size-3" />
        </Link>
      </div>
      {posts.length > 0 ? (
        <ul>
          {posts.map(({ slug, meta }) => (
            <li key={slug} className="border-t border-line first:border-t-0">
              <Link href={`/writing/${slug}`} className="group flex items-center justify-between gap-3.5 py-3.5">
                <span>
                  <span className="block text-[17px] type-title group-hover:text-accent">{meta.title}</span>
                  <time dateTime={meta.date.toISOString()} className="mt-1 block font-mono text-[11px] text-faint">
                    {formatDate(meta.date)}
                    {meta.tags.length > 0 && ` · ${meta.tags.join(" · ")}`}
                  </time>
                </span>
                <span className="arrow-dot size-7!">
                  <ArrowRight aria-hidden className="size-3" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-2 flex flex-1 flex-col justify-end gap-3 rounded-inner border border-dashed border-line-2 p-5">
          <p className="text-[clamp(30px,3vw,40px)] text-faint type-section">Nothing published yet.</p>
          <p className="text-sm text-muted">Notes and write-ups will appear here once they are out.</p>
        </div>
      )}
    </section>
  );
}

export function HobbiesTile() {
  return (
    <section aria-label="Off the keyboard" data-spotlight className="tile col-span-12 rise lg:col-span-5">
      <Kicker>Off the keyboard</Kicker>
      <ul className="mt-4.5 grid grid-cols-2 gap-2.5">
        {hobbies.map((hobby) => (
          <li
            key={hobby.name}
            className="flex flex-col gap-5.5 rounded-inner border border-line bg-tile-2 p-3.5 transition hover:-translate-y-0.5 hover:-rotate-[0.6deg] hover:border-line-2"
          >
            <span className="grid size-8.5 place-items-center rounded-[10px] border border-line bg-tile">
              <HobbyIcon icon={hobby.icon} className="size-4.5 text-accent" />
            </span>
            <span className="text-[15px] leading-tight type-title">{hobby.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
