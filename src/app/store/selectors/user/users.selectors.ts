import { createSelector } from '@ngrx/store';
import { selectUser } from './feature';

const selectUsersReducer = createSelector(selectUser, (state) => state.users);

export const selectLoadUsers = createSelector(selectUsersReducer, (state) => state.cargado);

export const selectLoadingUsers = createSelector(selectUsersReducer, (state) => state.cargando);

export const selectErrorUsers = createSelector(selectUsersReducer, (state) => state.error);

export const selectUsers = createSelector(selectUsersReducer, (state) => state.resultados);
