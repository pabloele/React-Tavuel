import { types } from '../../../src/auth/types/types';

describe('Pruebas en types.js', () => {
  test('Debe regresar los types', () => {
    expect(types).toEqual({
      login: 'authLogin',
      logout: 'authLogout',
    });
  });
});
