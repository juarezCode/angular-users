import { Injectable } from '@angular/core';
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
          this.router.navigate(['/app']);
        }),
      ),
    { dispatch: false },
  );

  constructor(private actions$: Actions, private userAPI: UserAPI, private router: Router) {}
}
