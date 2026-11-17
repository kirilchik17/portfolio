import type { Metadata } from "next";
import { ProjectList } from "@/components/project-list";
import { SectionHead } from "@/components/section-head";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I have built: automation, scraping, data tooling, and web apps.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <div className="grid grid-cols-12 gap-3.5">
      <SectionHead
        as="h1"
        kicker={`Index · ${projects.length} projects`}
        title="Things I've built."
        action={
          <p className="max-w-[360px] text-sm text-muted">
            Automation, scraping, data tooling, and web apps.
          </p>
        }
      />
      <ProjectList projects={projects} />
    </div>
  );
}
