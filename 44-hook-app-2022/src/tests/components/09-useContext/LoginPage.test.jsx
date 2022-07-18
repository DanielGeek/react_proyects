import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from '../../../components/07-useContext/UserContext';
import { LoginScreen } from '../../../components/07-useContext/LoginScreen';

describe('Pruebas en <LoginPage />', () => {

  const user = {
    id: 1,
    name: 'Daniel'
  }

  test('debe de mostrar el componente sin el usuario', () => {
    render(
    <UserContext.Provider value={{ user: null }}>
      <LoginScreen />
    </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('debe de llamar el setUser cuando se hace click en el boton', () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginScreen />
      </UserContext.Provider>
      );

      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(setUserMock).toHaveBeenCalledWith({"email": "daniel@gmail.com", "id": 123, "name": "Daniel"})
  });
});