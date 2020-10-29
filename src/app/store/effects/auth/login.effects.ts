import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthAPI } from 'src/app/api/auth.api';
import { UserAPI } from 'src/app/api/user.api';
import { login, loginError, loginSuccess } from '../../actions/auth/login.actions';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ payload }) => {
        return this.authAPI
          .login(payload)
          .pipe(map((payload) => ({ token: payload.token, userId: payload.userId })));
      }),
      switchMap(({ token, userId }) => {
        return this.userAPI.getUser(userId).pipe(map((userData) => ({ token, userData })));
      }),
      map((response) => loginSuccess(response)),
      catchError((error) => of(loginError({ error: error.error }))),
    ),
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(() => {
          this.snackbar.open('Inicio correcto', null, { panelClass: 'primary' });
          this.router.navigate(['/app']);
        }),
      ),
    { dispatch: false },
  );

  loginError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginError),
        tap(() => {
          this.snackbar.open('Algo salió mal, vuelva a intentarlo', null, { panelClass: 'warn' });
        }),
        tap(({ error: { status } }) => {
          if (status === 'INVALID_PASSWORD') {
            this.snackbar.open('Contraseña incorrecta', null, {
              panelClass: 'warn',
            });
          }
          if (status === 'USER_NOT_FOUND') {
            this.snackbar.open('Usuario no encontrado', null, {
              panelClass: 'warn',
            });
          }
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private authAPI: AuthAPI,
    private userAPI: UserAPI,
    private router: Router,
    private snackbar: MatSnackBar,
  ) {}
}
