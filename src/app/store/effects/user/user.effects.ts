import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserAPI } from 'src/app/api/user.api';
import { getUser, getUserError, getUserSuccess } from '../../actions/user/user.actions';

@Injectable()
export class UserEffects {
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      switchMap(({ userId }) => {
        return this.userAPI.getUser(userId).pipe(
          map((payload) => getUserSuccess({ payload })),
          catchError((error) => of(getUserError({ error: error.error }))),
        );
      }),
    ),
  );

  constructor(private actions$: Actions, private userAPI: UserAPI) {}
}
