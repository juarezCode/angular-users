import { Action, createReducer } from '@ngrx/store';
import { mutableOn } from 'ngrx-etc';
import {
  createUser,
  createUserError,
  createUserSuccess,
} from '../../actions/user/create-user.actions';

export type State = {
  loading: boolean;
  error: any;
};

const initialState: State = {
  loading: false,
  error: null,
};

export function reducer(state: State, action: Action) {
  return createReducer(
    initialState,
    mutableOn(createUser, (state) => {
      state.loading = true;
      state.error = null;
    }),
    mutableOn(createUserSuccess, (state) => {
      state.loading = false;
    }),
    mutableOn(createUserError, (state, action) => {
      state.loading = false;
      state.error = action.error;
    }),
  )(state, action);
}
