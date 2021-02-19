import React from 'react';
import { render } from '@testing-library/react';

import Snackbar from './index';

import '@testing-library/jest-dom/extend-expect';

describe('Snackbar', () => {
  test('renders a Snackbar when open prop is true', () => {
    const { container } = render(<Snackbar message="Toasty" open />);

    expect(container.querySelector('[data-uic="snackbar"]')).toBeInTheDocument();
  });

  test('renders a list of `action` items', () => {
    const actionItems = [<span className="span-1">Span 1</span>, <span className="span-2">Span 2</span>];
    const { container } = render(<Snackbar action={actionItems} message="Toasty" open />);

    expect(container.querySelector('.span-1')).toBeInTheDocument();
    expect(container.querySelector('.span-2')).toBeInTheDocument();
  });

  test('renders an `action` item', () => {
    const actionItem = <span className="span-1">Span 1</span>;
    const { container } = render(<Snackbar action={actionItem} message="Toasty" open />);

    expect(container.querySelector('.span-1')).toBeInTheDocument();
  });
});
