import type { Metadata } from "next";
import { ProjectList } from "@/components/project-list";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I have built: automation, scraping, data tooling, and web apps.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">Projects</h1>
      <ProjectList projects={projects} />
    </>
  );
}
