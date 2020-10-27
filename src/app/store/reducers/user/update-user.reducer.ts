import { Action, createReducer } from '@ngrx/store';
import { mutableOn } from 'ngrx-etc';
import {
  updateUser,
  updateUserError,
  updateUserSuccess,
} from '../../actions/user/update-user.actions';

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
    mutableOn(updateUser, (state) => {
      state.loading = true;
      state.error = null;
    }),
    mutableOn(updateUserSuccess, (state) => {
      state.loading = false;
    }),
    mutableOn(updateUserError, (state, action) => {
      state.loading = false;
      state.error = action.error;
    }),
  )(state, action);
}
