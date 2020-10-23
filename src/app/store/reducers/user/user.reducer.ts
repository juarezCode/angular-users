import { Action, createReducer } from '@ngrx/store';
import { mutableOn } from 'ngrx-etc';
import { User } from 'src/app/types/user';
import { getUsersError, getUsers, getUsersSuccess } from '../../actions/user/user.actions';

export type State = {
  cargado: boolean;
  cargando: boolean;
  error: any;
  resultados: User[];
};

const initialState: State = {
  cargado: false,
  cargando: false,
  error: null,
  resultados: [],
};

export function reducer(state: State, action: Action) {
  return createReducer(
    initialState,
    mutableOn(getUsers, (state) => {
      state.cargado = false;
      state.cargando = true;
      state.error = null;
      state.resultados = [];
    }),
    mutableOn(getUsersSuccess, (state, action) => {
      state.cargado = true;
      state.cargando = false;
      state.resultados = action.payload;
    }),
    mutableOn(getUsersError, (state, action) => {
      state.cargando = false;
      state.error = action.error;
    }),
  )(state, action);
}
