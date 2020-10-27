import { combineReducers } from '@ngrx/store';
import * as fromUsers from './users.reducer';
import * as fromCreateUser from './create-user.reducer';
import * as fromUser from './user.reducer';

export const key = 'user';

export type State = {
  users: fromUsers.State;
  user: fromUser.State;
  createUser: fromCreateUser.State;
};

export const reducers = combineReducers({
  users: fromUsers.reducer,
  user: fromUser.reducer,
  createUser: fromCreateUser.reducer,
});
