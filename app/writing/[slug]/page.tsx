import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink } from "@/components/back-link";
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
    <article className="mx-auto max-w-[860px]">
      <header className="px-1 pt-2 pb-8 sm:pt-4">
        <BackLink href="/writing">All writing</BackLink>
        <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 type-label text-faint">
          <time dateTime={meta.date.toISOString()}>{formatDate(meta.date)}</time>
          {meta.draft && <span className="chip">draft</span>}
          {meta.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </p>
        <h1 className="mt-4 text-[clamp(48px,7vw,96px)] type-display">{meta.title}</h1>
        <p className="mt-5 max-w-[620px] text-[clamp(18px,1.6vw,22px)] leading-snug text-muted">{meta.summary}</p>
      </header>
      <div className="tile p-6! sm:p-12!">
        <div className="prose-mdx mx-auto max-w-[68ch]">{body}</div>
      </div>
    </article>
  );
}
