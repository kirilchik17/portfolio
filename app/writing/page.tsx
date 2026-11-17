import type { Metadata } from "next";
import { PostList } from "@/components/post-list";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes and posts.",
};

export default async function WritingPage() {
  const posts = await getPosts();
  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">Writing</h1>
      {posts.length > 0 ? <PostList posts={posts} /> : <p className="text-muted">No posts yet.</p>}
    </>
  );
}
