import Link from "next/link";
import { PostList } from "@/components/post-list";
import { ProjectList } from "@/components/project-list";
import { currentPosition } from "@/content/experience";
import { site } from "@/content/site";
import { getPosts, getProjects } from "@/lib/content";

export default async function HomePage() {
  const [projects, posts] = await Promise.all([getProjects(), getPosts()]);
  const featured = projects.filter((project) => project.meta.featured);
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-3xl font-bold">{site.name}</h1>
        <p className="mt-2 text-xl">{site.headline}</p>
        <p className="mt-4 text-muted-foreground">{site.intro}</p>
      </section>

      {currentPosition && (
        <section aria-labelledby="current-work">
          <h2 id="current-work" className="text-xl font-semibold">
            Currently
          </h2>
          <p className="mt-2">
            {currentPosition.role ? `${currentPosition.role} at ` : "Working at "}
            {currentPosition.companyUrl ? (
              <a href={currentPosition.companyUrl} target="_blank" rel="noopener noreferrer" className="underline">
                {currentPosition.company}
              </a>
            ) : (
              currentPosition.company
            )}
          </p>
          {currentPosition.companyBlurb && <p className="text-muted-foreground">{currentPosition.companyBlurb}</p>}
        </section>
      )}

      <section aria-labelledby="featured-projects">
        <h2 id="featured-projects" className="mb-4 text-xl font-semibold">
          Featured projects
        </h2>
        <ProjectList projects={featured} />
        <Link href="/projects" className="mt-4 inline-block underline">
          All projects
        </Link>
      </section>

      {latestPosts.length > 0 && (
        <section aria-labelledby="latest-posts">
          <h2 id="latest-posts" className="mb-4 text-xl font-semibold">
            Latest writing
          </h2>
          <PostList posts={latestPosts} />
          <Link href="/writing" className="mt-4 inline-block underline">
            All writing
          </Link>
        </section>
      )}

      <section aria-labelledby="contact-cta">
        <h2 id="contact-cta" className="text-xl font-semibold">
          Get in touch
        </h2>
        <p className="mt-2 text-muted-foreground">Open to collaborations or just a friendly chat.</p>
        <Link href="/contact" className="mt-4 inline-block underline">
          Contact me
        </Link>
      </section>
    </div>
  );
}
