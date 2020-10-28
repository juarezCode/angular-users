import { combineReducers } from '@ngrx/store';
import * as fromLogin from './login.reducer';
import * as fromToken from './token.reducer';

export const key = 'auth';

export type State = {
  login: fromLogin.State;
  token: string;
};

export const reducers = combineReducers({
  login: fromLogin.reducer,
  token: fromToken.reducer,
});
