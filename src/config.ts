import {LocalePrefix} from 'next-intl/routing';
 
export const locales = ['uk'] as const;
 
export const localePrefix = {
  mode: 'always',
  prefixes: {
    'uk': '/ua',

  }
} satisfies LocalePrefix<typeof locales>;
