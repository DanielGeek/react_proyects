/* eslint-disable testing-library/prefer-presence-queries */
import React from 'react';
import { screen, render } from '@testing-library/react';

import { Form } from './form';

const setup = () => render(<Form />);


describe('when the form is mounted', () => {
  // beforeEach(() => render(<Form />)) // bad practice

  it('there must be a create product form page', () => {
    setup();
    expect(screen.queryByRole('heading', { name: /create product/i}),
    ).toBeInTheDocument();
  });

  it('should exists the fields: name, size, type (electronic, furniture, clothing', () => {
    setup();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/size/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/type/i)).toBeInTheDocument();

    expect(screen.getByText(/electronic/i)).toBeInTheDocument();
    expect(screen.getByText(/furniture/i)).toBeInTheDocument();
    expect(screen.getByText(/clothing/i)).toBeInTheDocument();

    // screen.debug();
  });

  it('should exists the submit button', () => {
    setup();
    expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument();
  })

});