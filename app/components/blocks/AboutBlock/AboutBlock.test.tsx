import React from 'react';

import { TEXT } from '@constants';
import { render as RTLrender, screen } from '@testing-library/react';

import { AboutBlock } from '.';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((text: string) => text),
}));

jest.mock('next-intl/link', () => 'Link');

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

const { ABOUT_US, MISION, READ_MORE, ABOUT_US_TITLE, MISION_TITLE, ABOUT_TEXT, MISION_TEXT } = TEXT;

describe('Check AboutBlock', () => {
  beforeEach(() => {
    RTLrender(<AboutBlock />);
  });

  it('Check About us', async () => {
    expect(screen.getByText(ABOUT_US)).toBeInTheDocument();
  });

  it('Check mision', async () => {
    expect(screen.getByText(MISION)).toBeInTheDocument();
  });

  it('Check read more', async () => {
    expect(screen.getByText(READ_MORE)).toBeInTheDocument();
  });

  it('Check title', async () => {
    expect(screen.getByText(ABOUT_US_TITLE)).toBeInTheDocument();
    expect(screen.getByText(MISION_TITLE)).toBeInTheDocument();
  });

  it('Check texts', async () => {
    expect(screen.getByText(ABOUT_TEXT)).toBeInTheDocument();
    expect(screen.getByText(MISION_TEXT)).toBeInTheDocument();
  });
});
