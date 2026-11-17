import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-muted">That page does not exist or has moved.</p>
      <Link href="/" className="underline">
        Back home
      </Link>
    </div>
  );
}
