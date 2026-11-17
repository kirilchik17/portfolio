export type Education = {
  degree: string;
  school: string;
  years: string | undefined;
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

export type Hobby = {
  name: string;
  description: string;
};

export const bio: string[] = [
  "Hello! I'm Kirill Chigir, a Computer Science student at the Technion with a passion for full-stack development and cybersecurity.",
  "My journey in technology began with a curiosity about how websites work, which led me to explore web development. As I went deeper, I became fascinated by the security side of web applications, which sparked my interest in cybersecurity.",
  "I enjoy building secure, scalable applications that solve real-world problems.",
];

export const education: Education[] = [
  {
    degree: "BSc in Computer Science",
    school: "Technion - Israel Institute of Technology",
    years: undefined,
  },
];

// Grounded in the stacks of the projects on this site.
export const skills: SkillGroup[] = [
  { name: "Languages", skills: ["C#", "C++", "TypeScript", "JavaScript", "SQL"] },
  {
    name: "Frameworks and platforms",
    skills: [".NET", "ASP.NET", "Node.js", "Next.js", "Tailwind CSS", "Selenium"],
  },
  { name: "Data", skills: ["PostgreSQL", "SQLite FTS5", "FlameRobin"] },
  { name: "Cloud", skills: ["Docker", "Google Cloud Run", "Google Cloud SQL", "Google APIs"] },
  {
    name: "Security",
    skills: ["Reverse engineering private APIs", "Authentication", "Encryption", "Scrape-blocker bypass"],
  },
];

export const hobbies: Hobby[] = [
  {
    name: "Performing on stage as a guitarist",
    description:
      "I've been playing guitar for 8 years, and I have 3 years of experience in sound design and engineering.",
  },
  {
    name: "Event photography",
    description:
      "I got my first camera from my dad at 13. Since then I've photographed my own song covers, parties, and album and single covers for artists.",
  },
  {
    name: "Hackathons",
    description:
      "I take part in development hackathons. The most recent was the Entrepreneur First hackathon in Zurich, Switzerland. I also join school hackathons as an instructor.",
  },
  {
    name: "Capture the Flag (CTF)",
    description:
      "I take part in cybersecurity CTF competitions to sharpen my security skills in practice.",
  },
];
