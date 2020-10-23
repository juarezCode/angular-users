import { combineReducers } from '@ngrx/store';
import * as fromUser from './user.reducer';

export const key = 'users';

export type State = {
  users: fromUser.State;
};

export const reducers = combineReducers({
  users: fromUser.reducer,
});
