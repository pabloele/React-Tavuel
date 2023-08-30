import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';

describe('Pruebas en authReducer', () => {
  test('Debe retornar el estado por defecto ', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test('Debe llamar al Login y establecer el user ', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Charly García',
        id: '0',
      },
    };

    const { user, logged } = authReducer({ logged: false }, action);
    expect(user).toEqual(action.payload);
    expect(logged).toBeTruthy();
  });

  test('Debe efectuar el logout (borrar name del user y establecer logged en false', () => {
    const state = {
      logged: true,
      user: {
        name: 'Charly García',
        id: '0',
      },
    };

    const action = {
      type: types.logout,
    };

    const state2 = authReducer(state, action);
    expect(state2).toEqual({ logged: false });
  });
});
