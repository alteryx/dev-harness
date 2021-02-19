import React from 'react';
import { render } from '@testing-library/react';

import AyxAppWrapper from '../AyxAppWrapper';

import Switch from './index';

import '@testing-library/jest-dom/extend-expect';

describe('Switch', () => {
  test('renders a Switch', () => {
    const { container } = render(
      <AyxAppWrapper>
        <Switch />
      </AyxAppWrapper>
    );

    expect(container.querySelector('[data-uic="switch"]')).toBeInTheDocument();
  });
});
