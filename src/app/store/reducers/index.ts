import { InjectionToken } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import * as fromUser from './user';
import * as fromAuth from './auth';

export interface AppState {
  router: fromRouter.RouterReducerState<any>;
  [fromUser.key]: fromUser.State;
  [fromAuth.key]: fromAuth.State;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState>>('Root reducers token', {
  factory: () => ({
    router: fromRouter.routerReducer,
    user: fromUser.reducers,
    auth: fromAuth.reducers,
  }),
});
