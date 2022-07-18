import React from 'react';
import { render, screen } from "@testing-library/react";
import { HomeScreen } from "../../../components/07-useContext/HomeScreen";
import { UserContext } from '../../../components/07-useContext/UserContext';

describe('Pruebas en <HomePage />', () => {

  const user = {
    id: 1,
    name: 'Daniel'
  }

  test('debe de mostrar el componente sin el usuario', () => {
    render(
    <UserContext.Provider value={{ user: null }}>
      <HomeScreen />
    </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('debe de mostrar el componente con el usuario', () => {
    render(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(`${user.id}`);
  });
});