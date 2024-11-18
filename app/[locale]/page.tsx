import { useTranslations } from 'next-intl';

export const metadata = {
  title: 'El Khoubaraa - home',
};

export default function Page() {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <h1 className="text-3xl text-primary">{t('hello')}</h1>
      <p>Home page here</p>
    </div>
  );
}
