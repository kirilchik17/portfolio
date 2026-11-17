import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/content";
import { formatDate } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getPosts()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.summary,
    openGraph: { type: "article", publishedTime: post.meta.date.toISOString(), tags: post.meta.tags },
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPost((await params).slug);
  if (!post) notFound();
  const { meta, body } = post;

  return (
    <article>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{meta.title}</h1>
        <time dateTime={meta.date.toISOString()} className="mt-2 block text-sm text-muted-foreground">
          {formatDate(meta.date)}
        </time>
        {meta.tags.length > 0 && (
          <ul className="mt-2 flex gap-2 text-sm text-muted-foreground">
            {meta.tags.map((tag) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
        )}
      </header>
      <div className="space-y-4">{body}</div>
    </article>
  );
}
