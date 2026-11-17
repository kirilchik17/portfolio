// "2026" or "2025-03". Record only the precision you know; never invent a month.
export type Year = `${number}`;
export type YearMonth = `${number}-${number}`;
export type PartialDate = Year | YearMonth;

// The animated feature tile on the home page. Copy follows the company's own site.
export type Showcase = {
  headline: { lead: string; emphasis: string };
  description: string;
  flow: string[];
  products: string[];
};

export type Position = {
  company: string;
  companyUrl: string | undefined;
  companyBlurb: string | undefined;
  // undefined means "not filled in yet", rendered as absent rather than guessed.
  role: string | undefined;
  start: PartialDate | undefined;
  highlights: string[];
  showcase: Showcase | undefined;
} & ({ current: true } | { current: false; end: PartialDate | undefined });

// Newest first. The first `current: true` entry is featured on the home page.
export const experience: Position[] = [
  {
    company: "Amoreg",
    companyUrl: "https://amoreg.com",
    companyBlurb: "Agentic compliance for financial services",
    role: "Software Engineer",
    start: "2026",
    highlights: [],
    showcase: {
      headline: { lead: "Agentic compliance for", emphasis: "financial services." },
      description:
        "Agents that answer, research, review and rehearse, grounded in your regulators, policies and evidence. Built for fund administrators and trust companies, with a named human approving every change.",
      flow: ["regulatory change", "agent research", "cited answer", "human approves"],
      products: ["Eve", "Inspector", "Probe", "Insight"],
    },
    current: true,
  },
  {
    company: "Infoneto",
    companyUrl: undefined,
    companyBlurb: undefined,
    role: "Software Developer",
    start: "2022-07",
    highlights: [
      "Worked on semantic search over millions of records using NLP and machine learning from human feedback.",
      "Built SQLite FTS5 search and indexing for a CV aggregation app on Gmail, Google Drive, and Contacts.",
      "Worked on a browser extension that matches candidates in the system to their social media profiles.",
      "Joined at 17. Built a Windows watchdog service in 3 days against a 2-week deadline.",
    ],
    showcase: undefined,
    current: false,
    end: "2025-08",
  },
];

export const currentPosition = experience.find((position) => position.current);
