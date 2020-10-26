import { combineReducers } from '@ngrx/store';
import * as fromUser from './users.reducer';
import * as fromCreateUser from './create-user.reducer';

export const key = 'user';

export type State = {
  users: fromUser.State;
  createUser: fromCreateUser.State;
};

export const reducers = combineReducers({
  users: fromUser.reducer,
  createUser: fromCreateUser.reducer,
});
