import { createAction, props } from '@ngrx/store';

export const deleteUser = createAction('[User] Delete User', props<{ userId: number }>());

export const deleteUserSuccess = createAction('[User] Delete User Success');

export const deleteUserError = createAction('[User] Delete User Error', props<{ error: any }>());
