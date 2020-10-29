import { createAction, props } from '@ngrx/store';
import { User, UserLogin } from 'src/app/types/user';

export const login = createAction('[Login] Login', props<{ payload: UserLogin }>());

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ token: string; userData: User }>(),
);

export const loginError = createAction('[Login] Login Error', props<{ error: any }>());
