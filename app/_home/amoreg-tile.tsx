import { ArrowUpRight } from "lucide-react";
import type { Position, Showcase } from "@/content/experience";
import { formatPeriod } from "@/lib/format";
import { FlowSteps } from "./flow-steps";

export function AmoregTile({ position, showcase }: { position: Position; showcase: Showcase }) {
  const meta = [position.role, formatPeriod(position)].filter(Boolean).join(" · ");

  return (
    <section
      data-spotlight
      aria-labelledby="current-work"
      className="amoreg tile col-span-12 flex flex-col border-white/8 bg-amoreg p-0! text-amoreg-ink rise before:bg-[radial-gradient(420px_circle_at_var(--mx,50%)_var(--my,50%),rgb(255_255_255/0.08),transparent_60%)] lg:col-span-7 lg:min-h-[460px]"
      style={{ animationDelay: "60ms" }}
    >
      <div
        aria-hidden
        className="absolute -inset-[20%] -z-20 animate-drift blur-[20px]"
        style={{
          background:
            "radial-gradient(40% 50% at 20% 20%, rgb(110 86 255 / 0.55), transparent 70%), radial-gradient(35% 45% at 85% 30%, rgb(19 184 154 / 0.4), transparent 70%), radial-gradient(50% 50% at 60% 100%, rgb(70 40 200 / 0.55), transparent 70%), var(--color-amoreg)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] bg-size-[40px_40px]"
        style={{ maskImage: "radial-gradient(ellipse at 70% 40%, #000 0, transparent 70%)" }}
      />
      <div className="flex flex-col items-start justify-between gap-3 px-5 pt-5 sm:flex-row sm:px-7 sm:pt-7">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/6 px-3 py-1.5 type-label text-white/80 backdrop-blur">
          <span className="pulse-dot bg-amoreg-teal!" />
          Now · Current work
        </span>
        {meta && (
          <span className="rounded-lg border border-white/20 px-2.5 py-1 font-mono text-xs whitespace-nowrap text-white/80">
            {meta}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-end px-5 pt-8 pb-6 sm:p-7">
        <p className="mb-3 flex items-center gap-2.5 text-[15px] text-white/75">
          <span
            aria-hidden
            className="grid size-7.5 place-items-center rounded-[9px] bg-linear-135 from-white to-[#cfc8ff] text-[15px] font-black text-[#1a1442]"
          >
            {position.company[0]}
          </span>
          {position.company}
        </p>
        <h2 id="current-work" className="max-w-[600px] text-[clamp(40px,5vw,72px)] type-display">
          {showcase.headline.lead}{" "}
          <span className="bg-linear-90 from-amoreg-violet to-amoreg-teal bg-clip-text text-transparent">
            {showcase.headline.emphasis}
          </span>
        </h2>
        <p className="mt-4 max-w-[520px] text-[15.5px] text-white/75">{showcase.description}</p>
        <FlowSteps steps={showcase.flow} />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/8 bg-black/20 px-5 pt-4 pb-5 backdrop-blur-sm sm:px-7">
        <ul aria-label="Products" className="flex flex-wrap gap-1.5">
          {showcase.products.map((product) => (
            <li key={product} className="rounded-full border border-white/12 bg-white/8 px-2.5 py-1 text-[12.5px] text-white">
              {product}
            </li>
          ))}
        </ul>
        {position.companyUrl && (
          <a
            href={position.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 bg-white/12 px-3.5 py-2 text-sm font-semibold text-white transition hover:-translate-y-px hover:bg-white/22"
          >
            {new URL(position.companyUrl).host}
            <ArrowUpRight aria-hidden className="size-3.5" />
          </a>
        )}
      </div>
    </section>
  );
}
