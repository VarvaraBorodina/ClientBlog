import '@/styles/reset.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
