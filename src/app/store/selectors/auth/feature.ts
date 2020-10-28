import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../reducers';
import * as fromAuth from '../../reducers/auth';

export const selectAuth = createFeatureSelector<AppState, fromAuth.State>(fromAuth.key);
