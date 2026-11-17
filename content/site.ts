export type Social = {
  kind: "github" | "linkedin";
  label: string;
  href: string;
};

export type Site = {
  name: string;
  headline: string;
  intro: string;
  location: string | undefined;
  email: string | undefined;
  socials: Social[];
};

export const site: Site = {
  name: "Kirill Chigir",
  headline: "Full-stack developer and cybersecurity enthusiast",
  intro:
    "Computer Science student at the Technion with a passion for building secure, scalable web applications.",
  location: undefined,
  email: undefined,
  socials: [
    { kind: "github", label: "GitHub", href: "https://github.com/kirilchik17" },
    {
      kind: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kirill-chigir-b9b701bb",
    },
  ],
};

// Absolute origin for sitemap, robots, and Open Graph URLs. Set SITE_URL in production.
export const siteUrl = new URL(process.env.SITE_URL ?? "http://localhost:3000");
