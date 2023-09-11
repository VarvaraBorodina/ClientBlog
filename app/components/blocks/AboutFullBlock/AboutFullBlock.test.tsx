import { TEXT } from '@constants';
import { render as RTLrender, screen } from '@testing-library/react';
import React from 'react';

import { AboutFullBlock } from '.';

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

const {
  MISION,
  MISION_TITLE,
  ABOUT_US,
  ABOUT_US_TITLE,
  VISION,
  VISION_TITLE,
  VIEW_FIN,
  VIEW_FIN_NUMBER,
  ACTIVE_USER_NUMBER,
  BLOG_PUBLISHED_NUMBER,
  ACTIVE_USER,
  BLOG_PUBLISHED,
} = TEXT;
const texts = [
  MISION,
  MISION_TITLE,
  ABOUT_US,
  ABOUT_US_TITLE,
  VISION,
  VISION_TITLE,
  VIEW_FIN,
  VIEW_FIN_NUMBER,
  ACTIVE_USER_NUMBER,
  BLOG_PUBLISHED_NUMBER,
  ACTIVE_USER,
  BLOG_PUBLISHED,
];

describe('Check AboutFullBlock', () => {
  beforeEach(() => {
    RTLrender(<AboutFullBlock />);
  });

  texts.forEach((text) => {
    it(`Check ${text}`, async () => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
