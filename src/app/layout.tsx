import '@/styles/reset.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Client Blog',
  description: 'We are a community of content writers who share their learnings',
  icons: {
    icon: '/img/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
