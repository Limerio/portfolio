import { LANGUAGES, type Language } from "@/constants";

export const getLangFromURL = () =>
  LANGUAGES[window.location.pathname.split("/")[1] as Language] ?? LANGUAGES.en;
