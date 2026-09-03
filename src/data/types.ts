/** A single string available in both site locales. */
export type Localized = { "zh-TW": string; en: string };

/** A list of strings available in both site locales. */
export type LocalizedList = {
  "zh-TW": readonly string[];
  en: readonly string[];
};

/** An external URL, or `null` when it has not been provided yet (never `"#"`). */
export type ExternalUrl = string | null;

export interface Profile {
  name: Localized;
  title: Localized;
  tagline: Localized;
  githubUrl: ExternalUrl;
}

export interface ExperienceItem {
  org: Localized;
  role: Localized;
  period: string;
  bullets: LocalizedList;
}

export interface Project {
  id: string;
  name: Localized;
  summary: Localized;
  tech: readonly string[];
  responsibilities: LocalizedList;
  result: Localized;
  githubUrl: ExternalUrl;
  demoUrl: ExternalUrl;
  isPublic: boolean;
}

export interface SkillGroup {
  name: Localized;
  items: readonly string[];
}
