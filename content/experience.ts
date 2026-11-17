// "2025-03" style month. Day precision is noise on a timeline.
export type YearMonth = `${number}-${number}`;

export type Position = {
  company: string;
  companyUrl: string | undefined;
  companyBlurb: string | undefined;
  // undefined means "not filled in yet", rendered as absent rather than guessed.
  role: string | undefined;
  start: YearMonth | undefined;
  highlights: string[];
} & ({ current: true } | { current: false; end: YearMonth | undefined });

// Newest first. The first `current: true` entry is featured on the home page.
export const experience: Position[] = [
  {
    company: "Amoreg",
    companyUrl: "https://amoreg.com",
    companyBlurb: "Agentic compliance for financial services",
    role: "Software Engineer",
    start: undefined,
    highlights: [],
    current: true,
  },
  {
    company: "Infoneto",
    companyUrl: undefined,
    companyBlurb: undefined,
    role: undefined,
    start: undefined,
    highlights: [
      "Joined at 17. First project was a Windows watchdog service that keeps a multi-program system running.",
      "Built the search and indexing for a CV aggregation app on top of Gmail, Google Drive, and Google Contacts.",
    ],
    current: false,
    end: undefined,
  },
];

export const currentPosition = experience.find((position) => position.current);
