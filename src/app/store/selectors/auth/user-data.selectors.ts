import { createSelector } from '@ngrx/store';
import { selectAuth } from './feature';

const selectUserDataReducer = createSelector(selectAuth, (state) => state.user);

export const selectAuthUser = createSelector(selectUserDataReducer, (state) => state);
