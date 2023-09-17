import React from 'react';

import { Category } from '@/types';
import categories from '@data/categories.json';
import { render as RTLrender, screen } from '@testing-library/react';

import { CategoriesBlock } from '.';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((text: string) => text),
}));
jest.mock('next-intl/link', () => 'Link');
jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
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
  Category: ({ category }: { category: Category }) => `${category.name}`,
}));

describe('Check CategoriesBlock', () => {
  beforeEach(() => {
    RTLrender(<CategoriesBlock title="title" titleAlign="left" column />);
  });

  it('Check title', async () => {
    expect(screen.getByText('title')).toBeInTheDocument();
  });

  categories.forEach((category) => {
    it(`Check ${category.name}`, async () => {
      expect(screen.getByText(category.name)).toBeInTheDocument();
    });
  });
});
