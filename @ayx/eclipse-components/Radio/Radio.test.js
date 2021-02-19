import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import AyxAppWrapper from '../AyxAppWrapper';

import Radio from './index';

describe('Radio', () => {
  test('renders a Radio button in `light` mode', () => {
    const { container } = render(
      <AyxAppWrapper>
        <Radio />
      </AyxAppWrapper>
    );

    expect(container.querySelector('[data-uic="radio"]')).toBeInTheDocument();
  });

  test('renders a Radio button in `dark` mode', () => {
    const { container } = render(
      <AyxAppWrapper paletteType="dark">
        <Radio />
      </AyxAppWrapper>
    );

    expect(container.querySelector('[data-uic="radio"]')).toBeInTheDocument();
  });

  test('renders a Radio button with `secondary` color', () => {
    const { container } = render(
      <AyxAppWrapper>
        <Radio color="secondary" />
      </AyxAppWrapper>
    );

    expect(container.querySelector('[data-uic="radio"]')).toBeInTheDocument();
  });
});
