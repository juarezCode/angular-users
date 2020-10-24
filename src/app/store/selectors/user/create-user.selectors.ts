import { createSelector } from '@ngrx/store';
import { selectUser } from './feature';

const selectCreateUserReducer = createSelector(selectUser, (state) => state.createUser);

export const selectCreatingUser = createSelector(selectCreateUserReducer, (state) => state.loading);

export const selectCreateUserError = createSelector(
  selectCreateUserReducer,
  (state) => state.error,
);
