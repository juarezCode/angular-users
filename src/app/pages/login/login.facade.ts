import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/actions/auth/login.actions';
import { UserLogin } from 'src/app/types/user';

@Injectable({
  providedIn: 'root',
})
export class LoginFacade {
  constructor(private store: Store) {}

  login(user: UserLogin) {
    this.store.dispatch(login({ payload: user }));
  }
}
