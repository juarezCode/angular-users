import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
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

  constructor(private actions$: Actions, private userAPI: UserAPI) {}
}
