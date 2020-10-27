import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getUser } from 'src/app/store/actions/user/user.actions';
import { selectUserData } from 'src/app/store/selectors/user/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class DeleteUserFacade {
  user$ = this.store.pipe(select(selectUserData));

  constructor(private store: Store) {}

  getUser(userId: number) {
    this.store.dispatch(getUser({ userId }));
  }
}
