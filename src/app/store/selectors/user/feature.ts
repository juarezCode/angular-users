import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../reducers';
import * as fromUser from '../../reducers/user';

export const selectUser = createFeatureSelector<AppState, fromUser.State>(fromUser.key);
