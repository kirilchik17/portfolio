import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Entry, ProjectMeta } from "@/lib/content";
import { indexLabel, projectStatusLabel } from "@/lib/format";

export type ProjectVisual = "terminal" | "graph" | "none";

const layout: Record<ProjectVisual, string> = {
  terminal: "lg:col-span-7 lg:min-h-[340px]",
  graph: "lg:col-span-5 lg:min-h-[340px]",
  none: "md:col-span-6",
};

export function ProjectTile({
  project,
  index,
  visual,
}: {
  project: Entry<ProjectMeta>;
  index: number;
  visual: ProjectVisual;
}) {
  const { slug, meta } = project;
  const label = [indexLabel(index), meta.status && projectStatusLabel[meta.status]].filter(Boolean).join(" / ");

  return (
    <Link
      href={`/projects/${slug}`}
      data-spotlight
      className={`group tile tile-lift col-span-12 flex flex-col gap-4 rise ${layout[visual]}`}
    >
      <span className="flex items-start justify-between gap-3">
        <span className="font-mono text-xs text-faint">{label}</span>
        <span className="arrow-dot">
          <ArrowRight aria-hidden className="size-3.5" />
        </span>
      </span>
      {visual === "terminal" && <TerminalVisual slug={slug} meta={meta} />}
      {visual === "graph" && <GraphVisual meta={meta} />}
      <span className="mt-auto block">
        <span className={`block type-title ${visual === "none" ? "text-[24px]" : "text-[clamp(26px,2.6vw,34px)]"}`}>
          {meta.title}
        </span>
        <span className="mt-2 block text-[14.5px] text-muted">{meta.summary}</span>
        <span className="mt-3 flex flex-wrap gap-1.5">
          {meta.stack.slice(0, 4).map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </span>
      </span>
    </Link>
  );
}

function TerminalVisual({ slug, meta }: { slug: string; meta: ProjectMeta }) {
  return (
    <span
      aria-hidden
      className="block h-[150px] overflow-hidden rounded-inner border border-line bg-tile-2 px-4 py-3.5 font-mono text-xs leading-[1.7] text-muted"
    >
      <span className="block">
        <span className="text-faint">$</span> open {slug}
      </span>
      {meta.stack.slice(0, 3).map((item) => (
        <span key={item} className="block">
          <span className="text-accent">→</span> load {item} <span className="text-faint">…</span>{" "}
          <span className="text-accent">ok</span>
        </span>
      ))}
      <span className="block">
        <span className="text-faint">$</span>
        <span className="ml-1.5 inline-block h-[13px] w-[7px] animate-blink bg-accent align-[-2px]" />
      </span>
    </span>
  );
}

const graphNodes = [
  { x: 70, y: 38 },
  { x: 230, y: 38 },
  { x: 62, y: 116 },
  { x: 238, y: 112 },
];

function GraphVisual({ meta }: { meta: ProjectMeta }) {
  const center = meta.title
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
  const nodes = graphNodes.slice(0, meta.stack.length).map((node, i) => ({ ...node, label: meta.stack[i] }));

  return (
    <span aria-hidden className="block h-[150px] overflow-hidden rounded-inner border border-line bg-tile-2">
      <svg viewBox="0 0 300 150" fill="none" className="size-full">
        <g stroke="var(--line-2)">
          {nodes.map((node) => (
            <path key={node.label} d={`M150 77 ${node.x} ${node.y}`} />
          ))}
        </g>
        <circle cx="150" cy="77" r="18" fill="var(--accent)" />
        <text x="150" y="81" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="#fff">
          {center}
        </text>
        {nodes.map((node, i) => (
          <g key={node.label}>
            <circle cx={node.x} cy={node.y} r="7" fill="var(--tile)" stroke="var(--line-2)" />
            {i % 3 === 0 && <circle cx={node.x} cy={node.y} r="3" fill="var(--accent-2)" />}
            <text
              x={node.x}
              y={node.y + (node.y < 77 ? -12 : 20)}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="9"
              fill="var(--muted)"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </span>
  );
}
