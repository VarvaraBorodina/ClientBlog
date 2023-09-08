import posts from '@data/posts.json';
import { fireEvent, render as RTLrender, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';

import { Post } from '@/types';

import { CategoryPostsBlock } from '.';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((text: string) => text),
}));

jest.mock('@/constants', () => ({
  ...jest.requireActual('@/constants'),
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

jest.mock('client-blog-library', () => ({
  CategoryPost: ({ post }: { post: Post }) => post.title,
}));

describe('Check CategoryPostsBlock', () => {
  beforeEach(() => {
    RTLrender(<CategoryPostsBlock title="title" posts={posts} />);
  });

  posts.slice(0, 5).forEach((post) => {
    it(`Check ${post.title}`, async () => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });
  });

  it('Check pagination', async () => {
    expect(screen.getByText('Next >')).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(screen.getByText('Next >'));
    });

    expect(screen.queryByText(posts[1].title)).toBeNull();
  });
});
