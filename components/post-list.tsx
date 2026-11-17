import Link from "next/link";
import type { Entry, PostMeta } from "@/lib/content";
import { formatDate } from "@/lib/format";

export function PostList({ posts }: { posts: Entry<PostMeta>[] }) {
  return (
    <ul className="space-y-6">
      {posts.map(({ slug, meta }) => (
        <li key={slug}>
          <h3 className="font-medium">
            <Link href={`/writing/${slug}`}>{meta.title}</Link>
            {meta.draft && <span className="ml-2 text-sm text-muted">(draft)</span>}
          </h3>
          <p className="text-muted">{meta.summary}</p>
          <time dateTime={meta.date.toISOString()} className="text-sm text-muted">
            {formatDate(meta.date)}
          </time>
        </li>
      ))}
    </ul>
  );
}
