import '@/styles/reset.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import React from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ASSETS, TEXT } from '@/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: TEXT.PROJECT_TITLE,
  description: TEXT.PROJECT_DESCRIPTION,
  icons: {
    icon: ASSETS.FAV_ICON,
  },
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
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
