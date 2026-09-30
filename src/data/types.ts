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
  /** Path under public/ (e.g. `licenses/foo.png`), or null when no brand asset. */
  logoSrc?: string | null;
}

/** Issue / expiry date for a license (LinkedIn-style). Month is 1–12 when known. */
export interface LicenseIssued {
  year: number;
  month?: number;
}

/**
 * Licenses & certifications entry.
 * Optional fields may be omitted or set to `null` when unknown.
 * Prefer `issued` + `description` (not legacy period/bullets).
 */
export interface LicenseItem {
  title: Localized;
  org: Localized;
  issued: LicenseIssued;
  /** Omit or null when the credential does not expire. Same shape as issued. */
  expiry?: LicenseIssued | null;
  description: LocalizedList;
  credentialId?: string | null;
  credentialUrl?: ExternalUrl;
  /** Path under public/ (e.g. `/licenses/foo.svg`), or null when no brand asset. */
  logoSrc?: string | null;
  skills?: LocalizedList;
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
  /** Optional short blurb under the group name; omit when chips alone suffice. */
  intro?: Localized;
  items: LocalizedList;
}

export interface AcademicItem {
  title: Localized;
  kind: Localized;
  /** Optional blurb under the title; omit when bullets alone suffice. */
  summary?: Localized;
  bullets: LocalizedList;
  /** Path under public/ (e.g. `licenses/foo.png`), or null when no brand asset. */
  logoSrc?: string | null;
}
