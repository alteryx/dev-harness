import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import AyxAppWrapper from '../AyxAppWrapper';

import Link from './index';

const dudUrl = '#';

describe('Link', () => {
  test('renders a Link in `light` mode', () => {
    const { container } = render(
      <AyxAppWrapper>
        <Link href={dudUrl}>Link</Link>
      </AyxAppWrapper>
    );

    expect(container.querySelector('[data-uic="link"]')).toBeInTheDocument();
  });

  test('renders a Link in `dark` mode', () => {
    const { container } = render(
      <AyxAppWrapper paletteType="dark">
        <Link href={dudUrl}>Link</Link>
      </AyxAppWrapper>
    );

    expect(container.querySelector('[data-uic="link"]')).toBeInTheDocument();
  });
});
