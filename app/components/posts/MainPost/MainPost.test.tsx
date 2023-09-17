import React from 'react';

import { render as RTLrender, screen } from '@testing-library/react';

import { MainPost } from '.';

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

const post = {
  id: 6,
  category: 2,
  author: 2,
  creationDate: {
    month: 4,
    day: 12,
    year: 2022,
  },
  title: 'Design tips for designers that cover everything you need',
  description:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.\n',

  image: '/img/posts/840996.jpg',
  tags: [13, 10, 9, 8, 1],
};

describe('Check Main Post', () => {
  beforeEach(() => {
    RTLrender(<MainPost />);
  });

  it('Check title', async () => {
    expect(screen.getByText(post.title)).toBeInTheDocument();
  });

  it('Check description', async () => {
    expect(screen.getByText(post.description)).toBeInTheDocument();
  });

  it('Check author', async () => {
    expect(screen.getByText('Leslie Alexander')).toBeInTheDocument();
  });

  it('Check Read more', async () => {
    expect(screen.getByText('Read more')).toBeInTheDocument();
  });

  it('Check Feature Post', async () => {
    expect(screen.getByText('Feature Post')).toBeInTheDocument();
  });
});
