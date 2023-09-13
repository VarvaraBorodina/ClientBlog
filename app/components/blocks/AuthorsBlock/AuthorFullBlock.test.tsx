import React from 'react';

import { Author } from '@/types';
import { TEXT } from '@constants';
import authors from '@data/authors.json';
import { render as RTLrender, screen } from '@testing-library/react';

import { AuthorsBlock } from '.';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((text: string) => text),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
  usePathname: jest.fn().mockReturnValue('/en/about'),
}));

jest.mock('@constants', () => ({
  ...jest.requireActual('@constants'),
  ICONS: {
    CLOSE: '<Close />',
    MENU: '<Menu />',

    BUSINESS: '<Business />',
    ECONOMY: '<Economy />',
    STARTUP: '<StartUp />',
    TECHNOLOGY: '<Technology />',

    NEXT_ARROW: ' <NextArrow />',
    BACK_ARROW: '<BackArrow />',

    LOADER: '<Loader />',
  },
  PARTNERS: ['<LogoBall />', '<LogoDrop />', '<LogoHalf />', '<LogoMap />', '<LogoSun />'],
}));

jest.mock('client-blog-library', () => ({
  Author: ({ author }: { author: Author }) => `${author.name} ${author.lastName}`,
}));

const { AUTHORS } = TEXT;
const texts = [AUTHORS];

describe('Check AuthorsBlock', () => {
  beforeEach(() => {
    RTLrender(<AuthorsBlock authorsAmount={8} />);
  });

  texts.forEach((text) => {
    it(`Check ${text}`, async () => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  authors.forEach((author) => {
    it(`Check ${author.name}`, async () => {
      expect(screen.getByText(`${author.name} ${author.lastName}`)).toBeInTheDocument();
    });
  });
});
