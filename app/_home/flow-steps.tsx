"use client";

import { Check } from "lucide-react";
import { Fragment, useEffect, useState } from "react";

export function FlowSteps({ steps }: { steps: string[] }) {
  const [lit, setLit] = useState(steps.length - 1);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setLit((current) => (current + 1) % (steps.length + 1)), 1100);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <ol aria-label="How it works" className="mt-6 flex flex-wrap items-center gap-2">
      {steps.map((step, index) => (
        <Fragment key={step}>
          {index > 0 && <li aria-hidden className="h-px w-3.5 bg-white/30" />}
          <li
            data-on={index <= lit}
            className="flex items-center gap-1.5 rounded-lg border border-white/12 bg-white/7 px-2.5 py-1.5 font-mono text-[11.5px] text-white/70 transition-colors duration-400 data-[on=true]:border-amoreg-violet/50 data-[on=true]:bg-[rgb(139_123_255/0.22)] data-[on=true]:text-white"
          >
            {step}
            {index === steps.length - 1 && <Check aria-hidden className="size-3" />}
          </li>
        </Fragment>
      ))}
    </ol>
  );
}
