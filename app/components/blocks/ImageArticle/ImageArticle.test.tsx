import { render as RTLrender, screen } from '@testing-library/react';
import React from 'react';

import { ImageArticle } from '.';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn().mockReturnValue((text: string) => text),
}));

const title = 'title';
const subtitle = 'subtitle';
const text = 'text';
const image = 'image';
const type = 'left';

describe('Check ImageArticle', () => {
  beforeEach(() => {
    RTLrender(
      <ImageArticle title={title} subtitle={subtitle} text={text} image={image} type={type} />
    );
  });

  it('title', async () => {
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('subtitle', async () => {
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });

  it('text', async () => {
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
