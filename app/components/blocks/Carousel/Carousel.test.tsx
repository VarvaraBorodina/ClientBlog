import { TEXT } from '@constants';
import reviews from '@data/review.json';
import { render as RTLrender, screen } from '@testing-library/react';
import React from 'react';

import { Carousel } from '.';

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

const { TESTIMONIAL, TESTIMONIAL_TEXT, TESTIMONIAL_TITLE } = TEXT;
const texts = [TESTIMONIAL, TESTIMONIAL_TEXT, TESTIMONIAL_TITLE];

describe('Check Carousel', () => {
  beforeEach(() => {
    RTLrender(<Carousel />);
  });

  texts.forEach((text) => {
    it(`Check ${text}`, async () => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('Check review', async () => {
    expect(screen.getByText(reviews[0].city)).toBeInTheDocument();
    expect(screen.queryAllByText(reviews[0].review)).toHaveLength(2);
    expect(screen.getByText(reviews[0].user)).toBeInTheDocument();
  });
});
