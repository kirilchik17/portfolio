import type { ProjectMeta } from "@/lib/content";
import { projectStatusLabel } from "@/lib/format";

export function StatusBadge({ status, className = "" }: { status: NonNullable<ProjectMeta["status"]>; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        aria-hidden
        data-status={status}
        className="size-2 rounded-full bg-faint data-[status=active]:bg-accent-2 data-[status=in-development]:bg-accent"
      />
      {projectStatusLabel[status]}
    </span>
  );
}
