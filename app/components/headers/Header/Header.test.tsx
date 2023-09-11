import { TEXT } from '@constants';
import { render as RTLrender, screen } from '@testing-library/react';
import React from 'react';

import { Header } from '.';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((text: string) => text),
}));

jest.mock('next-intl/client', () => ({
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
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

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  usePathname: jest.fn().mockReturnValue('/home'),
}));

const { HEADER, VIDEO_BUTTON } = TEXT;

describe('Check Header', () => {
  beforeEach(() => {
    RTLrender(<Header />);
  });

  it('Check header', async () => {
    expect(screen.getByText(HEADER)).toBeInTheDocument();
  });

  it('Check video button', async () => {
    expect(screen.getByText(VIDEO_BUTTON)).toBeInTheDocument();
  });
});
