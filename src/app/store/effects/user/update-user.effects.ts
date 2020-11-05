import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { UserAPI } from 'src/app/api/user.api';
import {
  updateUser,
  updateUserError,
  updateUserSuccess,
} from '../../actions/user/update-user.actions';

@Injectable()
export class UpdateUserEffects {
  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUser),
      switchMap(({ payload, userId }) => {
        return this.userAPI.updateUser(userId, payload).pipe(
          map(() => updateUserSuccess()),
          catchError((error) => of(updateUserError({ error: error.error }))),
        );
      }),
    ),
  );

  updateUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateUserSuccess),
        tap(() => {
          this.snackbar.open('Se ha actualizado el usuario exitosamente', null, {
            panelClass: 'primary',
          });
          this.router.navigate(['/app/users']);
        }),
      ),
    { dispatch: false },
  );

  updateUserError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateUserError),
        tap(() =>
          this.snackbar.open('Algo salió mal, vuelva a intentarlo', null, {
            panelClass: 'warn',
          }),
        ),
        tap(({ error: { status } }) => {
          if (status === 'DUPLICATED') {
            this.snackbar.open('El email ya ha sido registrado', null, {
              panelClass: 'warn',
            });
          }
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private userAPI: UserAPI,
    private router: Router,
    private snackbar: MatSnackBar,
  ) {}
}
