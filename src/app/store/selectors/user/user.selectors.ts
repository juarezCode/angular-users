import { createSelector } from '@ngrx/store';
import { selectUser } from './feature';

const selectUserReducer = createSelector(selectUser, (state) => state.user);

export const selectUserData = createSelector(selectUserReducer, (state) => state.result);

export const selectDeletingUser = createSelector(selectUserReducer, (state) => state.loading);
