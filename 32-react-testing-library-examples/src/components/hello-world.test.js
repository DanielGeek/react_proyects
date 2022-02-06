/* eslint-disable testing-library/no-debugging-utils */
import React from 'react';
import { render, screen } from '@testing-library/react';

import HelloWorld from './hello-world';

test('renders hello world', () => {
  render(<HelloWorld />)
  // screen.debug();

  const title = screen.getByText(/hello world/i);
  // screen.debug(title);
  expect(title).toBeInTheDocument();
});