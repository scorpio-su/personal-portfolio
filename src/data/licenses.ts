import type { LicenseItem } from "./types";

const emptyDescription = {
  "zh-TW": [] as const,
  en: [] as const,
};

export const licenses: readonly LicenseItem[] = [
  {
    title: {
      "zh-TW": "Canva for Work",
      en: "Canva for Work",
    },
    org: {
      "zh-TW": "Canva",
      en: "Canva",
    },
    issued: { year: 2025, month: 11 },
    expiry: null,
    credentialId: "61e7b2",
    credentialUrl: "https://canva.com/design-school/certification-award/61e7b20d-42bb-4956-89f3-3ed5bc91912b",
    logoSrc: "licenses/canva.png",
    description: emptyDescription,
    skills: {
      "zh-TW": ["Canva"],
      en: ["Canva"],
    },
  },
  {
    title: {
      "zh-TW": "Gemini Certified Educator",
      en: "Gemini Certified Educator",
    },
    org: {
      "zh-TW": "Google for Education",
      en: "Google for Education",
    },
    issued: { year: 2025, month: 10 },
    expiry: { year: 2028, month: 10 },
    credentialId: "162876447",
    credentialUrl: "https://edu.google.accredible.com/1e03393b-f3dc-4882-a31d-0f20357df1fa",
    logoSrc: "licenses/gemini-for-education.jpg",
    description: emptyDescription,
  },
  {
    title: {
      "zh-TW": "Google Analytics 分析認證",
      en: "Google Analytics Certification",
    },
    org: {
      "zh-TW": "Google Digital Academy (Skillshop)",
      en: "Google Digital Academy (Skillshop)",
    },
    issued: { year: 2025, month: 7 },
    expiry: { year: 2026, month: 7 },
    credentialId: "159838269",
    credentialUrl: "https://skillshop.credential.net/c7c77a42-9653-4aea-bbf3-adbe1843c980#acc.SuQCVwZN",
    logoSrc: "licenses/google-skillshop.png",
    description: emptyDescription,
    skills: {
      "zh-TW": ["Google Analytics"],
      en: ["Google Analytics"],
    },
  },
];
