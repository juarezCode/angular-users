import { createSelector } from '@ngrx/store';
import { selectAuth } from './feature';

export const selectToken = createSelector(selectAuth, (state) => state.token);
