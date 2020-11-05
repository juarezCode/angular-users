import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { UserAPI } from 'src/app/api/user.api';
import {
  createUser,
  createUserError,
  createUserSuccess,
} from '../../actions/user/create-user.actions';

@Injectable()
export class CreateUserEffects {
  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUser),
      switchMap(({ payload }) => {
        return this.userAPI.createUser(payload).pipe(
          map(() => createUserSuccess()),
          catchError((error) => of(createUserError({ error: error.error }))),
        );
      }),
    ),
  );

  createUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createUserSuccess),
        tap(() => {
          this.snackbar.open('Se ha creado el usuario exitosamente', null, {
            panelClass: 'primary',
          });
          this.router.navigate(['/app/users']);
        }),
      ),
    { dispatch: false },
  );

  createUserError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createUserError),
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
