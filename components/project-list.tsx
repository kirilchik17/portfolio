import Link from "next/link";
import type { Entry, ProjectMeta } from "@/lib/content";

export function ProjectList({ projects }: { projects: Entry<ProjectMeta>[] }) {
  return (
    <ul className="space-y-6">
      {projects.map(({ slug, meta }) => (
        <li key={slug}>
          <h3 className="font-medium">
            <Link href={`/projects/${slug}`}>{meta.title}</Link>
          </h3>
          <p className="text-muted">{meta.summary}</p>
          <p className="text-sm text-muted">{meta.stack.join(" · ")}</p>
        </li>
      ))}
    </ul>
  );
}
