import { fireEvent, render, screen } from '@testing-library/react';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { Navbar } from '../../../src/ui';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <Navbar />', () => {
  const contextValue = {
    authState: {
      logged: true,
      user: {
        name: 'Charly García',
        id: '312132',
      },
    },
    logout: jest.fn(),
  };
  beforeEach(() => jest.clearAllMocks());

  test('Debe mostrar el nombre del usuario ', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>,
    );
    expect(screen.getByText('Charly García')).toBeTruthy();
  });
  test('Debe llamar el logout y navigate cuando se hace click en el botón logout ', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>,
    );
    screen.debug();
    const logoutBtn = screen.getByRole('button');
    fireEvent.click(logoutBtn);
    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
