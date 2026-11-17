import type { ReactNode } from "react";
import { Kicker } from "@/components/kicker";

export function SectionHead({
  kicker,
  title,
  as: Heading = "h2",
  action,
}: {
  kicker: string;
  title: string;
  as?: "h1" | "h2";
  action?: ReactNode;
}) {
  return (
    <div className="col-span-12 flex flex-col items-start justify-between gap-4 px-1 pt-8 pb-1 sm:flex-row sm:items-end sm:pt-11">
      <div>
        <Kicker className="mb-3">{kicker}</Kicker>
        <Heading className="text-[clamp(44px,6vw,84px)] type-section">{title}</Heading>
      </div>
      {action}
    </div>
  );
}
