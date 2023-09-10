import {
  act, fireEvent, render as RTLrender, screen,
} from '@testing-library/react';
import React from 'react';

import { Modal } from '.';

const setIsActive = jest.fn();

const render = (component: React.ReactElement) => RTLrender(component);

const content = 'content';

describe('Check Modal', () => {
  beforeEach(() => {
    render(<Modal closeModal={setIsActive}>{content}</Modal>);
  });

  it('Check content', async () => {
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it('Check close content', async () => {
    await act(async () => {
      fireEvent.mouseDown(document);
    });
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
