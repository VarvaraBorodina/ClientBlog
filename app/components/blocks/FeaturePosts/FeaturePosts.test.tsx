import { TEXT } from '@constants';
import { render as RTLrender, screen } from '@testing-library/react';
import React from 'react';

import { FeaturePosts } from '.';

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

const { FEATURE_POST, READ_MORE, VIEW_ALL, ALL_POST } = TEXT;
const texts = [FEATURE_POST, READ_MORE, VIEW_ALL, ALL_POST];

describe('Check FeaturePosts ', () => {
  beforeEach(() => {
    RTLrender(<FeaturePosts />);
  });

  texts.forEach((text) => {
    it(`Check ${text}`, async () => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
