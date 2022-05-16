import React from 'react';
import {screen, render} from '@testing-library/react';

import { LoginPage } from './login-page';

// eslint-disable-next-line testing-library/no-render-in-setup
beforeEach(() => render(<LoginPage />))

describe('when login page is mounted', () => {
  it('must display the login title', () => {
    expect(screen.getByText(/login page/i)).toBeInTheDocument()
  })

  it('must have a form with the following fields: email, password and a submit button.', () => {
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    // eslint-disable-next-line jest/valid-expect
    expect(screen.getByRole('button', {name: /send/i}))
  })
})