import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'hi' | 'mr';

export const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'hi', label: 'हिन्दी', short: 'हिं' },
  { code: 'mr', label: 'मराठी', short: 'मरा' },
];

const STORAGE_KEY = 'lang';

function initialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'hi' || stored === 'mr') return stored;
  } catch {
    /* storage unavailable */
  }
  return 'en';
}

type Ctx = { lang: Lang; setLang: (l: Lang) => void };

const LanguageContext = createContext<Ctx>({ lang: 'en', setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/** A dictionary provides the same shape in every language; Hindi and Marathi must match English. */
export type Dict<T> = { en: T; hi: T; mr: T };

/** Returns the strings for the active language. */
export function useT<T>(dict: Dict<T>): T {
  const { lang } = useLanguage();
  return dict[lang] ?? dict.en;
}
