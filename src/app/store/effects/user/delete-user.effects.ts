import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { UserAPI } from 'src/app/api/user.api';
import {
  deleteUser,
  deleteUserError,
  deleteUserSuccess,
} from '../../actions/user/delete-user.actions';

@Injectable()
export class DeleteUserEffects {
  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUser),
      switchMap(({ userId }) => {
        return this.userAPI.deleteUser(userId).pipe(
          map(() => deleteUserSuccess()),
          catchError((error) => of(deleteUserError({ error: error.error }))),
        );
      }),
    ),
  );

  deleteUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteUserSuccess),
        tap(() => {
          this.router.navigate(['/app']);
        }),
      ),
    { dispatch: false },
  );

  constructor(private actions$: Actions, private userAPI: UserAPI, private router: Router) {}
}
