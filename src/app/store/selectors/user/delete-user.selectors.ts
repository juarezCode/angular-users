import { createSelector } from '@ngrx/store';
import { selectUser } from './feature';

const selectDeleteUserReducer = createSelector(selectUser, (state) => state.deleteUser);

export const selectDeletingUser = createSelector(selectDeleteUserReducer, (state) => state.loading);
