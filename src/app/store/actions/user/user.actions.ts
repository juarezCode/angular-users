import { createAction, props } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { User } from 'src/app/types/user';

export const getUser = createAction('[User] Buscar Usuario', props<{ userId: number }>());

export const getUserSuccess = createAction(
  '[User] Buscar Usuario Exito',
  props<{ payload: User }>(),
);

export const getUserError = createAction('[User] Buscar Usuario Error', props<{ error: any }>());
