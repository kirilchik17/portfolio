import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { BackLink } from "@/components/back-link";
import { Kicker } from "@/components/kicker";
import { StatusBadge } from "@/components/status-badge";
import { getProject, getProjects } from "@/lib/content";
import { indexLabel } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getProjects()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProject((await params).slug);
  return project ? { title: project.meta.title, description: project.meta.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const projects = await getProjects();
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) notFound();
  const { meta, body } = projects[index];
  const links = [
    meta.links.repo && { label: "Source", href: meta.links.repo },
    meta.links.live && { label: "Live", href: meta.links.live },
  ].filter((link) => !!link);

  return (
    <article className="grid grid-cols-12 gap-3.5">
      <header className="col-span-12 px-1 pt-2 pb-4 sm:pt-4">
        <BackLink href="/projects">All projects</BackLink>
        <Kicker className="mt-8">Project {indexLabel(index)}</Kicker>
        <h1 className="mt-3 max-w-[16ch] text-[clamp(52px,8vw,120px)] type-display">{meta.title}</h1>
        <p className="mt-5 max-w-[620px] text-[clamp(18px,1.6vw,22px)] leading-snug text-muted">{meta.summary}</p>
      </header>

      <div className="tile col-span-12 p-6! sm:p-10! lg:col-span-8">
        <div className="prose-mdx max-w-[68ch]">{body}</div>
      </div>

      <aside className="col-span-12 lg:col-span-4">
        <dl className="tile grid gap-5 lg:sticky lg:top-24">
          {meta.status && (
            <Fact label="Status">
              <StatusBadge status={meta.status} />
            </Fact>
          )}
          {meta.year !== undefined && <Fact label="Year">{meta.year}</Fact>}
          <Fact label="Stack">
            <ul className="mt-1 flex flex-wrap gap-1.5">
              {meta.stack.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </Fact>
          {links.length > 0 && (
            <Fact label="Links">
              <ul className="mt-1 flex flex-wrap gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost h-10!">
                      {link.label} <ArrowUpRight aria-hidden className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </Fact>
          )}
        </dl>
      </aside>
    </article>
  );
}

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1.5 border-t border-line pt-4 first:border-t-0 first:pt-0">
      <dt className="type-label text-faint">{label}</dt>
      <dd className="text-[15px] font-medium">{children}</dd>
    </div>
  );
}
