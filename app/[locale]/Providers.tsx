'use client';

import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import React from 'react';

type TProvidersProps = {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
};

const Providers = ({ children, messages, locale }: TProvidersProps) => {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
};

export default Providers;
