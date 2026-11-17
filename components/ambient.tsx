const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function Ambient() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-[520px] left-1/2 size-[900px] -translate-x-1/2 bg-[radial-gradient(closest-side,var(--accent-soft),transparent_70%)] blur-[10px]" />
      <div
        className="absolute inset-0 bg-[radial-gradient(var(--line-2)_1px,transparent_1px)] bg-size-[28px_28px]"
        style={{ maskImage: "linear-gradient(to bottom, #000 0, transparent 420px)" }}
      />
      <div className="absolute inset-0 opacity-(--grain-opacity)" style={{ backgroundImage: grain }} />
    </div>
  );
}
