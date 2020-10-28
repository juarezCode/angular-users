import { createSelector } from '@ngrx/store';
import { selectAuth } from './feature';

const selectLoginReducer = createSelector(selectAuth, (state) => state.login);

export const selectlogging = createSelector(selectLoginReducer, (state) => state.loading);

export const selectSessionStarted = createSelector(
  selectLoginReducer,
  (state) => state.sessionStarted,
);
