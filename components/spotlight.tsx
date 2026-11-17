"use client";

import { useEffect } from "react";

export function Spotlight() {
  useEffect(() => {
    function onMove(event: PointerEvent) {
      if (!(event.target instanceof Element)) return;
      const tile = event.target.closest<HTMLElement>("[data-spotlight]");
      if (!tile) return;
      const rect = tile.getBoundingClientRect();
      tile.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      tile.style.setProperty("--my", `${event.clientY - rect.top}px`);
    }
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
  return null;
}
