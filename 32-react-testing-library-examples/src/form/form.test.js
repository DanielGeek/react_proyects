/* eslint-disable testing-library/prefer-presence-queries */
import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { Form } from './form';
import { CREATED_STATUS, ERROR_SERVER_STATUS } from '../consts/httpStatus';

const server = setupServer(
  rest.post('/products', (req, res, ctx) => {
    const { name, size, type } = req.body

    if (name && size && type ) {
      return res(ctx.status(CREATED_STATUS))
    }

    return res(ctx.status(ERROR_SERVER_STATUS))
  }),
);

beforeAll(() => server.listen());

afterAll(() => server.close());

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
  it('then should display validation messages', async() => {
    setup();

    expect(screen.queryByText(/the name is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/the size is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/the type is required/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /submit/i}));

    expect(screen.queryByText(/the name is required/i)).toBeInTheDocument();
    expect(screen.queryByText(/the size is required/i)).toBeInTheDocument();
    expect(screen.queryByText(/the type is required/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByRole('button', {name: /submit/i})).not.toBeDisabled();
    });

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

describe('When the user submits the form', () => {
  it('should the submit button be disabled until the request is done', async() => {
    setup();
    const submitBtn = screen.getByRole('button', {name: /submit/i});

    expect(submitBtn).not.toBeDisabled();

    fireEvent.click(submitBtn);

    expect(screen.getByRole('button', {name: /submit/i})).toBeDisabled();

    await waitFor(() => {
      expect(screen.getByRole('button', {name: /submit/i})).not.toBeDisabled();
    });
  });

  it('the form page must display the success message Product Stored and clean the fields values', async() => {
    setup();

    fireEvent.change(screen.getByLabelText(/name/i), { taget: { name: 'name', value: 'my product' }, });
    fireEvent.change(screen.getByLabelText(/size/i), { taget: { name: 'name', value: '10' }});
    fireEvent.change(screen.getByLabelText(/type/i), { taget: { name: 'name', value: 'electronic' }});

    fireEvent.click(screen.getByRole('button', {name: /submit/i}));

    await waitFor(() =>
      expect(screen.getByText(/product stored/i)).toBeInTheDocument());
  });
});