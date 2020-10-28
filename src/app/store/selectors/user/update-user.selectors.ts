import { createSelector } from '@ngrx/store';
import { selectUser } from './feature';

const selectUpdateUserReducer = createSelector(selectUser, (state) => state.updateUser);

export const selectUpdatingUser = createSelector(selectUpdateUserReducer, (state) => state.loading);
