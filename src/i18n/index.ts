import { en } from "./en";
import { zhTW } from "./zh-TW";

/**
 * Supported UI locales.
 *
 * Declared here (not in the context module) so the i18n layer never imports from
 * `contexts/`, avoiding a circular dependency.
 */
export type Locale = "zh-TW" | "en";

/** Every valid translation key, derived from the English dictionary. */
export type TranslationKey = keyof typeof en;

/**
 * Per-locale string table. `zh-TW.ts` is annotated with
 * `Record<TranslationKey, ...>`, so a drifting key set fails the build.
 */
export const dictionaries: Record<
  Locale,
  Record<TranslationKey, string | readonly string[]>
> = {
  en,
  "zh-TW": zhTW,
};
