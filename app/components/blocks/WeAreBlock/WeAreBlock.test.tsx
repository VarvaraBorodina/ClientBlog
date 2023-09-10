import { TEXT } from '@constants';
import { render as RTLrender, screen } from '@testing-library/react';
import React from 'react';

import { WeAre } from '.';

const { WE, FEATURED_IN } = TEXT;
const texts = [WE, FEATURED_IN];
const partners = ['<LogoBall />', '<LogoDrop />', '<LogoHalf />', '<LogoMap />', '<LogoSun />'];

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((text: string) => text),
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

describe('Check We Are', () => {
  beforeEach(() => {
    RTLrender(<WeAre />);
  });

  texts.forEach((text) => {
    it(`Check ${text}`, async () => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  partners.forEach((partner) => {
    it(`Check ${partner}`, async () => {
      expect(screen.getByText(partner)).toBeInTheDocument();
    });
  });
});
