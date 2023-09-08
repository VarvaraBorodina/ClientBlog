import { act, fireEvent, render as RTLrender, screen } from '@testing-library/react';
import React from 'react';

import { TEXT } from '@/constants';

import { Footer } from '.';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((text: string) => text),
}));

jest.mock('client-blog-library', () => ({
  Dropdown: jest.fn(),
  Networks: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  usePathname: jest.fn().mockReturnValue('/home'),
}));

jest.mock('next-intl/link', () => {
  return 'Link';
});

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

jest.mock('@/service/email', () => ({
  sendEmail: jest.fn(),
}));

describe('Check Footer', () => {
  beforeEach(() => {
    RTLrender(<Footer />);
  });

  it('Check header', async () => {
    expect(screen.getByText(TEXT.HEADER)).toBeInTheDocument();
  });

  it('Check email', async () => {
    expect(screen.getByPlaceholderText(TEXT.EMAIL_PLACEHOLDER)).toBeInTheDocument();
  });

  it('Check send empty email', async () => {
    expect(screen.getByText(TEXT.SUBSCRIBE)).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(screen.getByText(TEXT.SUBSCRIBE));
    });

    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('Check lagns', async () => {
    expect(screen.getByText('ru')).toBeInTheDocument();
    expect(screen.getByText('en')).toBeInTheDocument();
  });

  it('Check mail', async () => {
    expect(screen.getByText('Hello@finsweet.com')).toBeInTheDocument();
  });
});
