import { createSelector } from '@ngrx/store';
import { selectUser } from './feature';

const selectUserReducer = createSelector(selectUser, (state) => state.users);

export const selectLoadUsers = createSelector(selectUserReducer, (state) => state.cargado);

export const selectLoadingUsers = createSelector(selectUserReducer, (state) => state.cargando);

export const selectErrorUsers = createSelector(selectUserReducer, (state) => state.error);

export const selectUsers = createSelector(selectUserReducer, (state) => state.resultados);
