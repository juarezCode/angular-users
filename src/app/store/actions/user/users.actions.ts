import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/types/user';

export const getUsers = createAction('[User] Get Users');

export const getUsersSuccess = createAction(
  '[User] Get Users Success',
  props<{ payload: User[] }>(),
);

export const getUsersError = createAction('[User] Get Users Error', props<{ error: any }>());
