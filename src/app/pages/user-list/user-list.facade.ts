import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getUsers } from 'src/app/store/actions/user/user.actions';
import {
  selectErrorUsers,
  selectLoadingUsers,
  selectLoadUsers,
  selectUsers,
} from 'src/app/store/selectors/user/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserListFacade {
  users$ = this.store.pipe(select(selectUsers));

  loadingUsers$ = this.store.pipe(select(selectLoadingUsers));

  loadedUsers$ = this.store.pipe(select(selectLoadUsers));

  errorUsers$ = this.store.pipe(select(selectErrorUsers));

  constructor(private store: Store) {}

  getUsers() {
    this.store.dispatch(getUsers());
  }
}
