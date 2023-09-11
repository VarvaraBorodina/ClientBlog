import React from 'react';

import { TEXT } from '@constants';
import { render as RTLrender, screen } from '@testing-library/react';

import { JoinBlock } from '.';

const { JOIN_HEADER, JOIN_TEXT, JOUN_BUTTON } = TEXT;
const texts = [JOIN_HEADER, JOIN_TEXT, JOUN_BUTTON];

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

describe('Check JoinBlock', () => {
  beforeEach(() => {
    RTLrender(<JoinBlock />);
  });

  texts.forEach((text) => {
    it(`Check ${text}`, async () => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
