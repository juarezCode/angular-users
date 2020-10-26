import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/types/user';

export const getUsers = createAction('[User] Busqueda Usuarios');

export const getUsersSuccess = createAction(
  '[User] Busqueda Usuarios Exito',
  props<{ payload: User[] }>(),
);

export const getUsersError = createAction(
  '[User] Busqueda Usuarios Error',
  props<{ error: any }>(),
);
