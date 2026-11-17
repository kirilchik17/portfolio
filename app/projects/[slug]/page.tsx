import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, getProjects, type ProjectMeta } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getProjects()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProject((await params).slug);
  return project ? { title: project.meta.title, description: project.meta.summary } : {};
}

const statusLabel: Record<NonNullable<ProjectMeta["status"]>, string> = {
  "in-development": "In development",
  active: "Active",
  completed: "Completed",
  archived: "Archived",
};

export default async function ProjectPage({ params }: Props) {
  const project = await getProject((await params).slug);
  if (!project) notFound();
  const { meta, body } = project;

  return (
    <article>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{meta.title}</h1>
        <p className="mt-2 text-muted-foreground">{meta.summary}</p>
        <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
          {meta.status && (
            <>
              <dt>Status</dt>
              <dd>{statusLabel[meta.status]}</dd>
            </>
          )}
          {meta.year !== undefined && (
            <>
              <dt>Year</dt>
              <dd>{meta.year}</dd>
            </>
          )}
          <dt>Stack</dt>
          <dd>{meta.stack.join(", ")}</dd>
        </dl>
        {(meta.links.repo || meta.links.live) && (
          <ul className="mt-4 flex gap-4 text-sm">
            {meta.links.repo && (
              <li>
                <a href={meta.links.repo} target="_blank" rel="noopener noreferrer" className="underline">
                  Source
                </a>
              </li>
            )}
            {meta.links.live && (
              <li>
                <a href={meta.links.live} target="_blank" rel="noopener noreferrer" className="underline">
                  Live
                </a>
              </li>
            )}
          </ul>
        )}
      </header>
      <div className="space-y-4">{body}</div>
    </article>
  );
}
