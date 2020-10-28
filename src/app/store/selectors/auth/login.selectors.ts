import { createSelector } from '@ngrx/store';
import { selectAuth } from './feature';

const selectLogin = createSelector(selectAuth, (state) => state.login);

export const selectlogging = createSelector(selectLogin, (state) => state.loading);
