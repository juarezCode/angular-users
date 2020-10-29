import { combineReducers } from '@ngrx/store';
import { User } from 'src/app/types/user';
import * as fromLogin from './login.reducer';
import * as fromToken from './token.reducer';
import * as fromUserData from './user-data.reducer';

export const key = 'auth';

export type State = {
  login: fromLogin.State;
  token: string;
  user: User;
};

export const reducers = combineReducers({
  login: fromLogin.reducer,
  token: fromToken.reducer,
  user: fromUserData.reducer,
});
