import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";
import { startGoogleSignIn } from "../../../src/store/auth/thunks";
import { MemoryRouter } from "react-router-dom";
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const mockStartGoogleSignIn = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn
}))

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  preloadedState: {
    auth: notAuthenticatedState
  }
})

describe('Prueba en <LoginPage />', () => {

  test('debe de mostrar el componente correctamente', () => {

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1);

  });

  test('boton de google debe de llamar el startGoogleSignIn', () => {

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText('google-btn');
    fireEvent.click(googleBtn);
    // screen.debug();
    // console.log(store.getState());
    expect( mockStartGoogleSignIn ).toHaveBeenCalled();

  });

  test('submit debe de llamar startLoginWithEmailPassword', () => {

    const email = 'daniel@google.com';
    const password = '123456';

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const emailField = screen.getByRole('textbox', { name: 'Correo'});
    fireEvent.change( emailField, { target: { name: 'email', value: email }});

    const passwordField = screen.getByTestId('password');
    fireEvent.change( passwordField, { target: { name: 'password', value: password }});

    const loginForm = screen.getByLabelText('submit-form');
    fireEvent.submit( loginForm );

  });
 });