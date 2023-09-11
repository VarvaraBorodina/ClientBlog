import React from 'react';

import { TEXT } from '@constants';
import { render as RTLrender, screen } from '@testing-library/react';

import { WhyWeStarted } from '.';

const { WE_STARTED, WE_STARTED_HEADER, WE_STARTED_TEXT, DISCOVER } = TEXT;
const texts = [WE_STARTED, WE_STARTED_HEADER, WE_STARTED_TEXT, DISCOVER];

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

describe('Check WhyWeStarted', () => {
  beforeEach(() => {
    RTLrender(<WhyWeStarted />);
  });

  texts.forEach((text) => {
    it(`Check ${text}`, async () => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
