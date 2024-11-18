import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['ar', 'en', 'fr'] as const;
export const localePrefix = 'always';

type DirectionMap = {
  readonly [key: string]: 'ltr' | 'rtl';
};
export const dirs: DirectionMap = {
  ar: 'rtl',
  en: 'ltr',
  fr: 'ltr',
} as const;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
