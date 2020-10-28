import { Action, createReducer } from '@ngrx/store';
import { mutableOn } from 'ngrx-etc';
import { login, loginError, loginSuccess } from '../../actions/auth/login.actions';

export type State = {
  loading: boolean;
  sessionStarted: boolean;
  error: any;
};

const initialState: State = {
  loading: false,
  sessionStarted: false,
  error: null,
};

export function reducer(state: State, action: Action) {
  return createReducer(
    initialState,
    mutableOn(login, (state) => {
      state.loading = true;
      state.sessionStarted = false;
      state.error = null;
    }),
    mutableOn(loginSuccess, (state) => {
      state.loading = false;
      state.sessionStarted = true;
    }),
    mutableOn(loginError, (state, action) => {
      state.loading = false;
      state.error = action.error;
    }),
  )(state, action);
}
