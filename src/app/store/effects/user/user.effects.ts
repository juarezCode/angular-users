import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserAPI } from 'src/app/api/user.api';
import { getUsersError, getUsers, getUsersSuccess } from '../../actions/user/user.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      switchMap(() => {
        return this.userAPI.getUsers().pipe(
          map((payload) => getUsersSuccess({ payload })),
          catchError((error) => {
            return of(getUsersError({ error }));
          }),
        );
      }),
    ),
  );

  constructor(private actions$: Actions, private userAPI: UserAPI) {}
}
