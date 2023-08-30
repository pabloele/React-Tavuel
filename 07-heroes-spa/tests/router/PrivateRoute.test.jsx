import { render, screen } from '@testing-library/react';
import { PrivateRoute } from '../../src/router/PrivateRoute';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en PrivateRoute', () => {
  test('Debe mostrar el children si está autenticado ', () => {
    Storage.prototype.setItem = jest.fn();
    const contextValue = {
      authState: {
        logged: true,
        user: {
          name: 'Juan Perez',
          id: '312132',
        },
      },
    };
    render(
      <MemoryRouter initialEntries={['/test']}>
        <AuthContext.Provider value={contextValue}>
          <PrivateRoute>
            <h1>Hola ruta privada</h1>
          </PrivateRoute>
        </AuthContext.Provider>
      </MemoryRouter>,
    );
    screen.debug();
    expect(screen.getByText('Hola ruta privada')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/test');
  });
});
