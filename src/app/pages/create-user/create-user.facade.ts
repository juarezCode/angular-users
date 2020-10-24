import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { createUser } from 'src/app/store/actions/user/create-user.actions';
import { selectCreatingUser } from 'src/app/store/selectors/user/create-user.selectors';
import { NewUser } from 'src/app/types/user';

@Injectable({
  providedIn: 'root',
})
export class CreateUserFacade {
  creatingUser$ = this.store.pipe(select(selectCreatingUser));

  constructor(private store: Store) {}

  createUser(user: NewUser) {
    console.log('user', user);
    this.store.dispatch(createUser({ payload: user }));
  }
}
