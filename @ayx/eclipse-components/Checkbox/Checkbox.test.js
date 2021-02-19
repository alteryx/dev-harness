import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import AyxAppWrapper from '../AyxAppWrapper';

import Checkbox from './index';

describe('Checkbox', () => {
  test('renders a Checkbox in `light` mode', () => {
    const { container } = render(
      <AyxAppWrapper>
        <Checkbox />
      </AyxAppWrapper>
    );

    expect(container.querySelector('[data-uic="checkbox"]')).toBeInTheDocument();
  });

  test('renders a Checkbox in `dark` mode', () => {
    const { container } = render(
      <AyxAppWrapper paletteType="dark">
        <Checkbox />
      </AyxAppWrapper>
    );

    expect(container.querySelector('[data-uic="checkbox"]')).toBeInTheDocument();
  });
});
