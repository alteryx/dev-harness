import React from 'react';
import { render } from '@testing-library/react';

import AyxAppWrapper from '../AyxAppWrapper';

import SnackbarContent from './index';

import '@testing-library/jest-dom/extend-expect';

describe('SnackbarContent', () => {
  test('renders a SnackbarContent in `light` mode when open prop is true', () => {
    const { container } = render(<SnackbarContent message="Toasty" open />);

    expect(container.querySelector('[data-uic="snackbar-content"]')).toBeInTheDocument();
  });

  test('renders a SnackbarContent in `dark` mode when open prop is true', () => {
    const { container } = render(
      <AyxAppWrapper paletteType="dark">
        <SnackbarContent message="Toasty" open />
      </AyxAppWrapper>
    );

    expect(container.querySelector('[data-uic="snackbar-content"]')).toBeInTheDocument();
  });
  test('renders a list of `action` items', () => {
    const actionItems = [<span className="span-1">Span 1</span>, <span className="span-2">Span 2</span>];
    const { container } = render(<SnackbarContent action={actionItems} message="Toasty" open />);

    expect(container.querySelector('.span-1')).toBeInTheDocument();
    expect(container.querySelector('.span-2')).toBeInTheDocument();
  });

  test('renders an `action` item', () => {
    const actionItem = <span className="span-1">Span 1</span>;
    const { container } = render(<SnackbarContent action={actionItem} message="Toasty" open />);

    expect(container.querySelector('.span-1')).toBeInTheDocument();
  });
});
