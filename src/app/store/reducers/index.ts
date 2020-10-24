import { InjectionToken } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import * as fromUser from './user';

export interface AppState {
  router: fromRouter.RouterReducerState<any>;
  [fromUser.key]: fromUser.State;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState>>('Root reducers token', {
  factory: () => ({
    router: fromRouter.routerReducer,
    user: fromUser.reducers,
  }),
});
