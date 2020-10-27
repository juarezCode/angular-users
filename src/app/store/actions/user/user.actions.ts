import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/types/user';

export const getUser = createAction('[User] Get User', props<{ userId: number }>());

export const getUserSuccess = createAction('[User] Get User Success', props<{ payload: User }>());

export const getUserError = createAction('[User] Get User Error', props<{ error: any }>());
