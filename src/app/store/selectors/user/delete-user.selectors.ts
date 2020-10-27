import { createSelector } from '@ngrx/store';
import { selectUser } from './feature';

const selectDeleteUser = createSelector(selectUser, (state) => state.deleteUser);

export const selectDeletingUser = createSelector(selectDeleteUser, (state) => state.loading);
