import '@/styles/reset.scss';

import en from '@text/en.json';
import ru from '@text/ru.json';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import React from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/headers/Header';
import { ASSETS, TEXT } from '@/constants';

import { RootProps } from './types';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: TEXT.PROJECT_TITLE,
  description: TEXT.PROJECT_DESCRIPTION,
  icons: {
    icon: ASSETS.FAV_ICON,
  },
};

const { RUSSIAN, ENGLISH } = TEXT;

export default async function RootLayout({ children, params: { locale } }: RootProps) {
  let messages;

  if (locale === RUSSIAN) {
    messages = ru;
  } else if (locale === ENGLISH) {
    messages = en;
  } else {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
