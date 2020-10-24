import { createAction, props } from '@ngrx/store';
import { NewUser } from 'src/app/types/user';

export const createUser = createAction('[User] Create User', props<{ payload: NewUser }>());

export const createUserSuccess = createAction('[User] Create User Success');

export const createUserError = createAction('[User] Create User Error', props<{ error: any }>());
