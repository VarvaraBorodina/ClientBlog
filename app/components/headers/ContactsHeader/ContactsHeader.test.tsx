import React from 'react';

import { TEXT } from '@constants';
import { render as RTLrender, screen } from '@testing-library/react';

import { ContactsHeader } from '.';

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
  EMAIL,
  PHONE,
  LET_START,
  CONTACTS_TEXT,
  WORKING_HOURS,
  WORKING_DAYS,
  WORKING_TIME,
  SUPPORT,
} = TEXT;

describe('Check Contacts Header', () => {
  beforeEach(() => {
    RTLrender(<ContactsHeader />);
  });

  it('Check EMAIL', async () => {
    expect(screen.getByText(EMAIL)).toBeInTheDocument();
  });

  it('Check suppert', async () => {
    expect(screen.getByText(SUPPORT)).toBeInTheDocument();
  });

  it('Check WORKING_DAYS', async () => {
    expect(screen.getByText(WORKING_DAYS)).toBeInTheDocument();
  });

  it('Check WORKING_TIME', async () => {
    expect(screen.getByText(WORKING_TIME)).toBeInTheDocument();
  });

  it('Check WORKING_HOURS', async () => {
    expect(screen.getByText(WORKING_HOURS)).toBeInTheDocument();
  });

  it('Check phone', async () => {
    expect(screen.getByText(PHONE)).toBeInTheDocument();
  });

  it('Check CONTACTS_TEXT', async () => {
    expect(screen.getByText(CONTACTS_TEXT)).toBeInTheDocument();
  });

  it('Check LET_START', async () => {
    expect(screen.getByText(LET_START)).toBeInTheDocument();
  });
});
