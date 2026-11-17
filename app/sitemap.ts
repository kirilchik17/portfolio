import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { getPosts, getProjects } from "@/lib/content";

const staticPaths = ["/", "/projects", "/writing", "/experience", "/about", "/contact"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, posts] = await Promise.all([getProjects(), getPosts()]);
  const url = (path: string) => new URL(path, siteUrl).toString();
  return [
    ...staticPaths.map((path) => ({ url: url(path) })),
    ...projects.map(({ slug }) => ({ url: url(`/projects/${slug}`) })),
    ...posts.map(({ slug, meta }) => ({ url: url(`/writing/${slug}`), lastModified: meta.date })),
  ];
}
