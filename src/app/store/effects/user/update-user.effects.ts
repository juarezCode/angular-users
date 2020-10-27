import { Injectable } from '@angular/core';
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
          this.router.navigate(['/app']);
        }),
      ),
    { dispatch: false },
  );

  constructor(private actions$: Actions, private userAPI: UserAPI, private router: Router) {}
}
