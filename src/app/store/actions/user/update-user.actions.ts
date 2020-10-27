import { createAction, props } from '@ngrx/store';
import { UserUpdate } from 'src/app/types/user';

export const updateUser = createAction(
  '[User] Update User',
  props<{ payload: UserUpdate; userId: number }>(),
);

export const updateUserSuccess = createAction('[User] Update User Success');

export const updateUserError = createAction('[User] Update User Error', props<{ error: any }>());
