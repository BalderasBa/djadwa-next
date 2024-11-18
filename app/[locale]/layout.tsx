import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { dirs, locales } from '../../navigation';
import '../../styles/globals.scss';
import Providers from './Providers';

export const metadata = {
  title: 'El Khoubaraa',
  description:
    'El Khoubaraa Expert Company for Consulting and Accounting Services',
  icons: '/favicon.ico',
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: (typeof locales)[number] };
}) {
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} dir={dirs[locale]}>
      <body>
        <Providers messages={messages} locale={locale}>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
