import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Entry, PostMeta } from "@/lib/content";
import { formatDate } from "@/lib/format";

export function PostList({ posts }: { posts: Entry<PostMeta>[] }) {
  return (
    <ol className="tile col-span-12 p-2! sm:p-3!">
      {posts.map(({ slug, meta }) => (
        <li key={slug} className="border-t border-line first:border-t-0">
          <Link
            href={`/writing/${slug}`}
            className="group grid grid-cols-[1fr_auto] items-start gap-x-4 gap-y-2 rounded-inner px-3 py-5 transition-colors hover:bg-tile-2 sm:px-4 lg:grid-cols-[10rem_minmax(0,1fr)_auto]"
          >
            <time dateTime={meta.date.toISOString()} className="col-start-1 row-start-1 pt-1 type-label text-faint">
              {formatDate(meta.date)}
              {meta.draft && " · draft"}
            </time>
            <span className="col-start-1 lg:col-start-2 lg:row-start-1">
              <span className="block text-[clamp(22px,2.2vw,30px)] type-title transition-colors group-hover:text-accent">
                {meta.title}
              </span>
              <span className="mt-1.5 block max-w-[60ch] text-[15px] text-muted">{meta.summary}</span>
              {meta.tags.length > 0 && (
                <span className="mt-2 flex flex-wrap gap-1.5">
                  {meta.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </span>
              )}
            </span>
            <span className="arrow-dot col-start-2 row-start-1 lg:col-start-3">
              <ArrowRight aria-hidden className="size-3.5" />
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
