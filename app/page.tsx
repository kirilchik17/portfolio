import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContactTile } from "@/components/contact-tile";
import { SectionHead } from "@/components/section-head";
import { education } from "@/content/about";
import { currentPosition } from "@/content/experience";
import { getPosts, getProjects } from "@/lib/content";
import { AmoregTile } from "./_home/amoreg-tile";
import { HeroTile } from "./_home/hero-tile";
import { EducationTile, NowTile, SocialsTile } from "./_home/info-tiles";
import { ProjectTile, type ProjectVisual } from "./_home/project-tile";
import { ExperienceTile, HobbiesTile, WritingTile } from "./_home/story-tiles";

const visuals: ProjectVisual[] = ["terminal", "graph"];

export default async function HomePage() {
  const [projects, posts] = await Promise.all([getProjects(), getPosts()]);
  const featured = projects.filter((project) => project.meta.featured);

  return (
    <div className="grid grid-cols-12 gap-2.5 sm:gap-3.5">
      <HeroTile current={currentPosition} />
      {currentPosition?.showcase && <AmoregTile position={currentPosition} showcase={currentPosition.showcase} />}

      <NowTile />
      {education[0] && <EducationTile education={education[0]} />}
      <SocialsTile />

      <SectionHead
        kicker="Selected work"
        title="Things I've built."
        action={
          <Link href="/projects" className="btn btn-ghost">
            All projects <ArrowRight aria-hidden className="size-4" />
          </Link>
        }
      />
      {featured.map((project, index) => (
        <ProjectTile key={project.slug} project={project} index={index} visual={visuals[index] ?? "none"} />
      ))}

      <SectionHead kicker="Experience & writing" title="Where I am, what I think." />
      <ExperienceTile />
      <WritingTile posts={posts.slice(0, 3)} />

      <HobbiesTile />
      <ContactTile className="lg:col-span-7" />
    </div>
  );
}
