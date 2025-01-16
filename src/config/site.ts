import envConfig from "@/config/config";

export type SiteConfig = {
  name: string;
  author: string;
  description: string;
  keywords: Array<string>;
  url: { base: string; author: string };
  links: { github: string };
  ogImage: string;
};

export const siteConfig: SiteConfig = {
  name: "Finance Tracker",
  author: "Conggglee",
  description:
    "Track your budget with ease and simplicity with Budget Tracker.",
  keywords: [
    "budget",
    "tracker",
    "money",
    "finance",
    "expenses",
    "income",
    "budgeting",
    "tracking",
  ],
  links: {
    github: "https://github.com/Congglee/budget-tracker",
  },
  url: {
    base: envConfig.NEXT_PUBLIC_APP_URL,
    author: "https://github.com/Congglee",
  },
  ogImage: `${envConfig.NEXT_PUBLIC_APP_URL}/og.png`,
};
