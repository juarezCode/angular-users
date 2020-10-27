import { Action, createReducer } from '@ngrx/store';
import { mutableOn } from 'ngrx-etc';
import {
  deleteUser,
  deleteUserError,
  deleteUserSuccess,
} from '../../actions/user/delete-user.actions';

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
    mutableOn(deleteUser, (state) => {
      state.loading = true;
      state.error = null;
    }),
    mutableOn(deleteUserSuccess, (state) => {
      state.loading = false;
      state.error = null;
    }),
    mutableOn(deleteUserError, (state, action) => {
      state.loading = false;
      state.error = action.error;
    }),
  )(state, action);
}
