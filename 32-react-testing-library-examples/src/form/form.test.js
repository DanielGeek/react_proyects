/* eslint-disable testing-library/prefer-presence-queries */
import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';

import { Form } from './form';

const setup = () => render(<Form />);

describe('when the form is mounted', () => {
  // beforeEach(() => render(<Form />)) // bad practice

  it('there must be a create product form page', () => {
    setup();

    expect(screen.queryByRole('heading', { name: /create product/i}),
    ).toBeInTheDocument();
  });

  it('then should exists the fields: name, size, type (electronic, furniture, clothing', () => {
    setup();

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/size/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/type/i)).toBeInTheDocument();

    expect(screen.getByText(/electronic/i)).toBeInTheDocument();
    expect(screen.getByText(/furniture/i)).toBeInTheDocument();
    expect(screen.getByText(/clothing/i)).toBeInTheDocument();

    // screen.debug();
  });

  it('then should exists the submit button', () => {
    setup();

    expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument();
  })

});

describe('when the user submits the form without values', () => {
  it('then should display validation messages', () => {
    setup();

    expect(screen.queryByText(/the name is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/the size is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/the type is required/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /submit/i}));

    expect(screen.queryByText(/the name is required/i)).toBeInTheDocument();
    expect(screen.queryByText(/the size is required/i)).toBeInTheDocument();
    expect(screen.queryByText(/the type is required/i)).toBeInTheDocument();
  });
});

describe('When the user blurs an empty field', () => {

  it('should display a validation error message for the input name', () => {
    setup();

    expect(screen.queryByText(/the name is required/i)).not.toBeInTheDocument();

    fireEvent.blur(screen.getByLabelText(/name/i), { taget: { name: 'name', value: ''}});

    expect(screen.queryByText(/the name is required/i)).toBeInTheDocument();
  });

  it('should display a validation error message for the input size', () => {
    setup();

    expect(screen.queryByText(/the size is required/i)).not.toBeInTheDocument();

    fireEvent.blur(screen.getByLabelText(/size/i), { taget: { name: 'size', value: ''}});

    expect(screen.queryByText(/the size is required/i)).toBeInTheDocument();
  });
});