export const LANGUAGES = {
  en: "en",
  fr: "fr",
} as const;

export type Language = keyof typeof LANGUAGES;

export const LANGUAGES_TRANSLATIONS = {
  [LANGUAGES.en]: "English",
  [LANGUAGES.fr]: "Français",
} as const;
