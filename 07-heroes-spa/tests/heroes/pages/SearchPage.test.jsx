import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en SearchPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('Debe mostrarse correctamente con valores por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>,
    );

    // screen.debug();
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar a batman y el input con el valor del queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>,
    );

    const inputValue = screen.getByRole('textbox').value;
    const imageUrl = screen.getByRole('img').src;
    const divSelectHero = screen.getByLabelText('searchHero');

    screen.debug();
    expect(inputValue).toBe('batman');
    expect(imageUrl).toContain('/assets/heroes/dc-batman.jpg');
    expect(divSelectHero.style.display).toBe('none');
  });

  test('Debe mostrar un error si no se encuentra el héroe', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=dfdsdgdsff']}>
        <SearchPage />
      </MemoryRouter>,
    );
    screen.debug();
    const noResultDiv = screen.getByLabelText('alertNoHero');
    expect(noResultDiv.style.display).toBe('');
  });

  test('Debe llamar el navigate a la pantalla nueva ', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=dfdsdgdsff']}>
        <SearchPage />
      </MemoryRouter>,
    );
    screen.debug();

    const input = screen.getByRole('textbox');
    const form = screen.getByLabelText('form');
    fireEvent.change(input, {
      target: { name: 'searchText', value: 'spiderman' },
    });

    fireEvent.submit(form);
    expect(mockedUseNavigate).toHaveBeenCalledWith('?q=spiderman');
  });
});
