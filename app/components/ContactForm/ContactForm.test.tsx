import { TEXT } from '@constants';
import {
  act, fireEvent, render as RTLrender, screen,
} from '@testing-library/react';
import React from 'react';

import { ContactForm } from '.';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((text: string) => text),
}));

jest.mock('client-blog-library', () => ({
  Dropdown: jest.fn(),
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

jest.mock('@/service/email', () => ({
  sendEmail: jest.fn(),
}));

describe('Check Contact Form', () => {
  beforeEach(() => {
    RTLrender(<ContactForm />);
  });

  it('Check header', async () => {
    expect(screen.getAllByText(TEXT.CONTACT_US)).toHaveLength(2);
  });

  it('Check email', async () => {
    expect(screen.getByPlaceholderText(TEXT.FULL_EMAIL_PLACEHOLDER)).toBeInTheDocument();
  });

  it('Check name', async () => {
    expect(screen.getByPlaceholderText(TEXT.NAME_PLACEHOLDER)).toBeInTheDocument();
  });

  it('Check message', async () => {
    expect(screen.getByPlaceholderText(TEXT.MESSAGE_PLACEHOLDER)).toBeInTheDocument();
  });

  it('Check send empty email', async () => {
    expect(screen.getByText(TEXT.SEND)).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(screen.getByText(TEXT.SEND));
    });

    expect(screen.getByText('email is a required field')).toBeInTheDocument();
  });

  it('Check send invalid email', async () => {
    await act(async () => {
      const input = screen.getByPlaceholderText(TEXT.FULL_EMAIL_PLACEHOLDER);
      fireEvent.change(input, { target: { value: '23' } });
    });

    await act(async () => {
      fireEvent.click(screen.getByText(TEXT.SEND));
    });

    expect(screen.getByText('email must be a valid email')).toBeInTheDocument();
  });

  it('Check send valid email', async () => {
    await act(async () => {
      const input = screen.getByPlaceholderText(TEXT.FULL_EMAIL_PLACEHOLDER);
      fireEvent.change(input, { target: { value: 'qwe@qw.qw' } });
    });

    await act(async () => {
      fireEvent.click(screen.getByText(TEXT.SEND));
    });

    expect(screen.queryByText('email must be a valid email')).not.toBeInTheDocument();
  });
});
