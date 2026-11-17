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
  icon: "guitar" | "camera" | "hackathon" | "flag";
  description: string;
};

export const bio: string[] = [
  "Hello! I'm Kirill Chigir, a Software Engineer at Amoreg, where we build AI agents for compliance teams in financial services. I'm also studying Computer Science at the Technion.",
  "Before Amoreg I spent three years as a Software Developer at Infoneto, working on semantic search built on natural language processing and machine learning from human feedback, across millions of records.",
  "On the side I build automation and scraping tools, and I'm drawn to the security side of things: reverse engineering login flows, pen-testing, and CTFs.",
];

export const education: Education[] = [
  {
    degree: "BSc in Computer Science (in progress)",
    school: "Technion - Israel Institute of Technology",
    years: "2024 to 2027",
  },
];

// Grounded in the stacks of the projects on this site and the LinkedIn profile.
export const skills: SkillGroup[] = [
  { name: "Languages", skills: ["C#", "C++", "TypeScript", "JavaScript", "SQL"] },
  {
    name: "Frameworks and platforms",
    skills: [".NET", "ASP.NET MVC", "Node.js", "Next.js", "Tailwind CSS", "Flutter", "Xamarin"],
  },
  { name: "Data", skills: ["PostgreSQL", "SQLite FTS5", "Firebase", "FlameRobin"] },
  {
    name: "Cloud",
    skills: ["Docker", "Google Cloud Run", "Google Cloud SQL", "Google APIs", "Firebase", "Twilio"],
  },
  {
    name: "Backend and automation",
    skills: ["Microservices", "Windows services", "Selenium", "REST scraping", "Telegram and WhatsApp bots"],
  },
  { name: "Tools", skills: ["Git", "SVN"] },
  {
    name: "Security",
    skills: ["Reverse engineering private APIs", "Authentication", "Encryption", "Scrape-blocker bypass", "OWASP ZAP pen-testing"],
  },
];

export const hobbies: Hobby[] = [
  {
    name: "Performing on stage as a guitarist",
    icon: "guitar",
    description:
      "I've been playing guitar for 8 years, and I have 3 years of experience in sound design and engineering.",
  },
  {
    name: "Event photography",
    icon: "camera",
    description:
      "I got my first camera from my dad at 13. Since then I've photographed my own song covers, parties, and album and single covers for artists.",
  },
  {
    name: "Hackathons",
    icon: "hackathon",
    description:
      "I take part in development hackathons. The most recent was the Entrepreneur First hackathon in Zurich, Switzerland. I also join school hackathons as an instructor.",
  },
  {
    name: "Capture the Flag (CTF)",
    icon: "flag",
    description:
      "I take part in cybersecurity CTF competitions to sharpen my security skills in practice.",
  },
];
