import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Entry, ProjectMeta } from "@/lib/content";
import { StatusBadge } from "@/components/status-badge";
import { indexLabel } from "@/lib/format";

export function ProjectList({ projects }: { projects: Entry<ProjectMeta>[] }) {
  return (
    <ol className="tile col-span-12 p-2! sm:p-3!">
      {projects.map(({ slug, meta }, index) => (
        <li key={slug} className="border-t border-line first:border-t-0">
          <Link
            href={`/projects/${slug}`}
            className="group grid grid-cols-[2.5rem_1fr_auto] items-start gap-x-4 gap-y-2 rounded-inner px-3 py-5 transition-colors hover:bg-tile-2 sm:px-4 lg:grid-cols-[3rem_minmax(0,4fr)_minmax(0,5fr)_minmax(0,2fr)_auto] lg:items-center"
          >
            <span className="col-start-1 row-start-1 pt-1.5 font-mono text-[13px] text-faint lg:pt-0">{indexLabel(index)}</span>
            <span className="col-start-2 row-start-1">
              <span className="block text-[clamp(22px,2.2vw,30px)] type-title transition-colors group-hover:text-accent">
                {meta.title}
              </span>
              {meta.status && (
                <StatusBadge status={meta.status} className="mt-1.5 font-mono text-[11.5px] text-muted" />
              )}
            </span>
            <span className="arrow-dot col-start-3 row-start-1 self-start lg:col-start-5 lg:self-center">
              <ArrowRight aria-hidden className="size-3.5" />
            </span>
            <span className="col-span-2 col-start-2 text-[15px] text-muted lg:col-span-1 lg:col-start-3 lg:row-start-1">{meta.summary}</span>
            <span className="col-span-2 col-start-2 type-label text-[11px] text-faint lg:col-span-1 lg:col-start-4 lg:row-start-1 lg:text-right">
              {meta.stack.slice(0, 3).join(" · ")}
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
