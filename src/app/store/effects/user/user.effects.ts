import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserAPI } from 'src/app/api/user.api';
import { getUsersError, getUsers, getUsersSuccess } from '../../actions/user/user.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class UserEffects {
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      switchMap(() => {
        return this.userAPI.getUsers().pipe(
          map((payload) => getUsersSuccess({ payload })),
          catchError((error) => {
            console.log(error);

            return of(getUsersError({ error: error.error }));
          }),
        );
      }),
    ),
  );

  getUsersError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getUsersError),
        tap(({ error: { message } }) => {
          console.log('message', message);
        }),
        tap(({ error: { message } }) =>
          this.snackbar.open('Algo salió mal, vuelva a intentarlo', null, {
            panelClass: 'primary',
          }),
        ),
        tap(({ error: { message } }) => {
          // if (message === 'MensajeSalida.USUARIO_BLOQUEADO')
          //   this.router.navigate(['/autenticacion/verificar-pregunta-secreta']);
        }),
      ),
    { dispatch: false },
  );

  constructor(private actions$: Actions, private userAPI: UserAPI, private snackbar: MatSnackBar) {}
}
