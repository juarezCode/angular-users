import { Action, createReducer } from '@ngrx/store';
import { mutableOn } from 'ngrx-etc';
import { login, loginSuccess } from '../../actions/auth/login.actions';

const initialState: string = null;

export function reducer(state: string, action: Action) {
  return createReducer(
    initialState,
    mutableOn(login, () => null),
    mutableOn(loginSuccess, (state, action) => {
      return action.token;
    }),
  )(state, action);
}
