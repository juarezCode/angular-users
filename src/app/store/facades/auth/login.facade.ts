import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { login } from 'src/app/store/actions/auth/login.actions';
import { UserLogin } from 'src/app/types/user';
import { selectlogging, selectSessionStarted } from '../../selectors/auth/login.selectors';
import { selectAuthUser } from '../../selectors/auth/user-data.selectors';

@Injectable({
  providedIn: 'root',
})
export class LoginFacade {
  logging$ = this.store.pipe(select(selectlogging));

  sessionStarted$ = this.store.pipe(select(selectSessionStarted));

  user$ = this.store.pipe(select(selectAuthUser));

  constructor(private store: Store) {}

  login(user: UserLogin) {
    this.store.dispatch(login({ payload: user }));
  }
}
