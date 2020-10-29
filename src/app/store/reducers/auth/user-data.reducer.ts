import { Action, createReducer } from '@ngrx/store';
import { mutableOn } from 'ngrx-etc';
import { User } from 'src/app/types/user';
import { login, loginSuccess } from '../../actions/auth/login.actions';

const initialState: User = null;

export function reducer(state: User, action: Action) {
  return createReducer(
    initialState,
    mutableOn(login, () => null),
    mutableOn(loginSuccess, (state, action) => {
      return action.userData;
    }),
  )(state, action);
}
