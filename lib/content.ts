import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import type { ReactElement } from "react";
import { cache } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import { z } from "zod";

const projectSchema = z.strictObject({
  title: z.string().min(1),
  summary: z.string().min(1),
  year: z.number().int().optional(),
  status: z.enum(["in-development", "active", "completed", "archived"]).optional(),
  featured: z.boolean(),
  order: z.number(),
  stack: z.array(z.string()),
  links: z.strictObject({
    repo: z.url().optional(),
    live: z.url().optional(),
  }),
});

const postSchema = z.strictObject({
  title: z.string().min(1),
  summary: z.string().min(1),
  date: z.coerce.date(),
  draft: z.boolean(),
  tags: z.array(z.string()),
});

export type ProjectMeta = z.infer<typeof projectSchema>;
export type PostMeta = z.infer<typeof postSchema>;

export type Entry<Meta> = {
  slug: string;
  meta: Meta;
  body: ReactElement;
};

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// Every collection page loads the whole directory, so one bad file fails the build.
function collection<Meta>(dir: string, schema: z.ZodType<Meta>) {
  const root = path.join(process.cwd(), "content", dir);
  return cache(async (): Promise<Entry<Meta>[]> => {
    const files = (await readdir(root)).filter((file) => file.endsWith(".mdx"));
    return Promise.all(
      files.map(async (file) => {
        const where = `content/${dir}/${file}`;
        const slug = file.slice(0, -".mdx".length);
        if (!slugPattern.test(slug)) {
          throw new Error(`${where}: file name must be a lowercase-kebab-case slug.`);
        }
        const { content, frontmatter } = await compileMDX({
          source: await readFile(path.join(root, file), "utf8"),
          options: { parseFrontmatter: true },
        });
        const parsed = schema.safeParse(frontmatter);
        if (!parsed.success) {
          throw new Error(`Invalid frontmatter in ${where}:\n${z.prettifyError(parsed.error)}`);
        }
        return { slug, meta: parsed.data, body: content };
      }),
    );
  });
}

const loadProjects = collection("projects", projectSchema);
const loadPosts = collection("posts", postSchema);

export async function getProjects(): Promise<Entry<ProjectMeta>[]> {
  return (await loadProjects()).sort((a, b) => a.meta.order - b.meta.order);
}

export async function getProject(slug: string): Promise<Entry<ProjectMeta> | undefined> {
  return (await loadProjects()).find((project) => project.slug === slug);
}

// Drafts render in `next dev` so you can preview them, and never ship in a production build.
const includeDrafts = process.env.NODE_ENV !== "production";

export async function getPosts(): Promise<Entry<PostMeta>[]> {
  return (await loadPosts())
    .filter((post) => includeDrafts || !post.meta.draft)
    .sort((a, b) => b.meta.date.getTime() - a.meta.date.getTime());
}

export async function getPost(slug: string): Promise<Entry<PostMeta> | undefined> {
  return (await getPosts()).find((post) => post.slug === slug);
}
