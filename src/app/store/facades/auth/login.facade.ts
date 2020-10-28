import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { login } from 'src/app/store/actions/auth/login.actions';
import { UserLogin } from 'src/app/types/user';
import { selectlogging } from '../../selectors/auth/login.selectors';

@Injectable({
  providedIn: 'root',
})
export class LoginFacade {
  logging$ = this.store.pipe(select(selectlogging));

  constructor(private store: Store) {}

  login(user: UserLogin) {
    this.store.dispatch(login({ payload: user }));
  }
}
