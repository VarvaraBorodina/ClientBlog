import { render as RTLrender, screen } from '@testing-library/react';
import React from 'react';

import { TEXT } from '@/constants';

import { HomePageHeader } from '.';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((text: string) => text),
}));

jest.mock('@/constants', () => ({
  ...jest.requireActual('@/constants'),
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

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  usePathname: jest.fn().mockReturnValue('/home'),
}));

const { READ_MORE } = TEXT;

describe('Home Page Header', () => {
  beforeEach(() => {
    RTLrender(<HomePageHeader />);
  });

  it('Check read more', async () => {
    expect(screen.getByText(READ_MORE)).toBeInTheDocument();
  });

  it('Check author', async () => {
    expect(screen.getByText('Floyd Miles')).toBeInTheDocument();
  });

  it('Check title', async () => {
    expect(screen.getByText('Step-by-step guide to choosing great font pairs')).toBeInTheDocument();
  });

  it('Check decription', async () => {
    expect(
      screen.getByText(
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
      )
    ).toBeInTheDocument();
  });
});
