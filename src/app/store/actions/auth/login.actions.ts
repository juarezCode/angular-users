import { createAction, props } from '@ngrx/store';
import { UserLogin } from 'src/app/types/user';

export const login = createAction('[Login] Login', props<{ payload: UserLogin }>());

export const loginSuccess = createAction('[Login] Login Success', props<{ token: string }>());

export const loginError = createAction('[Login] Login Error', props<{ error: any }>());
