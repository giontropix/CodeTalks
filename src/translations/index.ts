import itTranslations from './it.json';

export type Locale = 'it';
export type TranslationId = keyof typeof itTranslations;

export const translations: { [key in Locale]: Record<string, string> } = {
  it: itTranslations,
};
