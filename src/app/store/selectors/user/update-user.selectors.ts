import { createSelector } from '@ngrx/store';
import { selectUser } from './feature';

const selectUpdateUser = createSelector(selectUser, (state) => state.updateUser);

export const selectUpdatingUser = createSelector(selectUpdateUser, (state) => state.loading);
