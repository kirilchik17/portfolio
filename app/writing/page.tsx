import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { PostList } from "@/components/post-list";
import { SectionHead } from "@/components/section-head";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes and posts.",
};

export default async function WritingPage() {
  const posts = await getPosts();
  return (
    <div className="grid grid-cols-12 gap-3.5">
      <SectionHead as="h1" kicker="Writing" title="Notes & essays." />
      {posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <section className="tile col-span-12 grid gap-6 p-6! sm:p-10! md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="text-[clamp(40px,5vw,64px)] text-faint type-section">Nothing published yet.</p>
            <p className="mt-4 max-w-[46ch] text-muted">Notes and write-ups will appear here once they are out.</p>
          </div>
          <Link href="/projects" className="btn btn-ghost">
            Browse projects <ArrowRight aria-hidden className="size-4" />
          </Link>
        </section>
      )}
    </div>
  );
}
