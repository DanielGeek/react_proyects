/* eslint-disable testing-library/prefer-presence-queries */
import React from 'react';
import { screen, render } from '@testing-library/react';

import { Form } from './form';

describe('when the form is mounted', () => {
  it('there must be a create product form page', () => {
    render(<Form />);

    expect(screen.queryByRole('heading', { name: /create product/i}),
    ).toBeInTheDocument();
  });
});