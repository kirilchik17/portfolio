import { Camera, Flag, Music, Zap, type LucideIcon } from "lucide-react";
import type { Hobby } from "@/content/about";
import type { Social } from "@/content/site";

const brandPaths: Record<Social["kind"], string> = {
  github:
    "M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z",
  linkedin:
    "M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6zM8 19H5V9h3v10zM6.5 7.7a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5zM19 19h-3v-4.9c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v5h-3V9h2.9v1.4c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V19z",
};

export function SocialIcon({ kind, className }: { kind: Social["kind"]; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d={brandPaths[kind]} />
    </svg>
  );
}

export function socialHandle(href: string): string {
  return new URL(href).pathname.split("/").filter(Boolean).at(-1) ?? href;
}

const hobbyIcons: Record<Hobby["icon"], LucideIcon> = {
  guitar: Music,
  camera: Camera,
  hackathon: Zap,
  flag: Flag,
};

export function HobbyIcon({ icon, className }: { icon: Hobby["icon"]; className?: string }) {
  const Icon = hobbyIcons[icon];
  return <Icon aria-hidden className={className} />;
}
