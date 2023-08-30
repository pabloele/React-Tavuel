import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en PublicRoute', () => {
  test('Debe mostrar el children si no está autenticado ', () => {
    const contextValue = {
      authState: {
        logged: false,
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Hola</h1>
        </PublicRoute>
      </AuthContext.Provider>,
    );
    // screen.debug();
    expect(screen.getByText('Hola')).toBeTruthy();
  });

  test('Debe navegar si está autenticado', () => {
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
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path='login'
              element={
                <PublicRoute>
                  <h1>Hola2</h1>
                </PublicRoute>
              }
            />
            <Route path='marvel' element={<h1>Página de Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>,
    );
    screen.debug();
  });
});
