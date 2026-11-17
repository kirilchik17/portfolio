import type { PartialDate, Position } from "@/content/experience";

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function formatPartialDate(value: PartialDate): string {
  if (!value.includes("-")) return value;
  return new Date(`${value}-01T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    timeZone: "UTC",
  });
}

export function formatPeriod(position: Position): string | undefined {
  const start = position.start && formatPartialDate(position.start);
  if (position.current) return start && `Since ${start}`;
  const end = position.end && formatPartialDate(position.end);
  if (start && end) return `${start} to ${end}`;
  return start ?? (end && `Until ${end}`);
}
