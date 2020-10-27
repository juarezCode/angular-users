import { Action, createReducer } from '@ngrx/store';
import { mutableOn } from 'ngrx-etc';
import { User } from 'src/app/types/user';
import { getUser, getUserError, getUserSuccess } from '../../actions/user/user.actions';

export type State = {
  loaded: boolean;
  loading: boolean;
  error: any;
  result: User;
};

const initialState: State = {
  loaded: false,
  loading: false,
  error: null,
  result: null,
};

export function reducer(state: State, action: Action) {
  return createReducer(
    initialState,
    mutableOn(getUser, (state) => {
      state.loaded = false;
      state.loading = true;
      state.error = null;
      state.result = null;
    }),
    mutableOn(getUserSuccess, (state, action) => {
      state.loaded = true;
      state.loading = false;
      state.result = action.payload;
    }),
    mutableOn(getUserError, (state, action) => {
      state.loading = false;
      state.error = action.error;
    }),
  )(state, action);
}
