import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { AppRouter } from '../../src/router/AppRouter';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en app router', () => {
  test('debe mostrar el login si no está autenticado', () => {
    const contextValue = {
      authState: {
        logged: false,
        user: {
          name: 'Juan Perez',
          id: '312132',
        },
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    // screen.debug();
    expect(screen.getAllByText('Login')).toBeTruthy();
  });
  test('debe mostrar la ruta de marvel si está autenticado', () => {
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
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>,
    );

    screen.debug();
    expect(screen.getAllByText('Marvel')).toBeTruthy();
  });
});
