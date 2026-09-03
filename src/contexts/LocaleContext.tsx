import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, type Locale, type TranslationKey } from "../i18n";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  toggleLocale: () => void;
  t: (key: TranslationKey) => string;
  tList: (key: TranslationKey) => readonly string[];
}

const STORAGE_KEY = "pp.locale";
const LOCALES: readonly Locale[] = ["zh-TW", "en"];

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

function isLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" && (LOCALES as readonly string[]).includes(value)
  );
}

function htmlLang(locale: Locale): string {
  return locale === "zh-TW" ? "zh-Hant-TW" : "en";
}

/**
 * Resolves the initial locale: a stored choice wins, otherwise the browser
 * languages are inspected and anything starting with `zh` maps to `zh-TW`.
 */
function readInitialLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) {
      return stored;
    }
  } catch {
    // localStorage may be unavailable; fall through to language detection.
  }

  const candidates =
    typeof navigator === "undefined"
      ? []
      : [navigator.language, ...navigator.languages];

  for (const candidate of candidates) {
    const tag = candidate ? candidate.toLowerCase() : "";
    if (tag.startsWith("zh")) {
      return "zh-TW";
    }
    if (tag.startsWith("en")) {
      return "en";
    }
  }

  return "en";
}

export function LocaleProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  useEffect(() => {
    document.documentElement.lang = htmlLang(locale);
    const title = dictionaries[locale]["meta.title"];
    if (typeof title === "string") {
      document.title = title;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // Persisting the choice is best-effort only.
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => (current === "zh-TW" ? "en" : "zh-TW"));
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      const value = dictionaries[locale][key];
      return typeof value === "string" ? value : value.join(" ");
    },
    [locale],
  );

  const tList = useCallback(
    (key: TranslationKey): readonly string[] => {
      const value = dictionaries[locale][key];
      return typeof value === "string" ? [value] : value;
    },
    [locale],
  );

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, toggleLocale, t, tList }),
    [locale, setLocale, toggleLocale, t, tList],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
