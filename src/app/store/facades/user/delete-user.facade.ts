import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { deleteUser } from 'src/app/store/actions/user/delete-user.actions';
import { getUser } from 'src/app/store/actions/user/user.actions';
import { selectDeletingUser } from 'src/app/store/selectors/user/delete-user.selectors';
import { selectUserData } from 'src/app/store/selectors/user/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class DeleteUserFacade {
  deleting$ = this.store.pipe(select(selectDeletingUser));

  constructor(private store: Store) {}

  getUser(userId: number) {
    this.store.dispatch(getUser({ userId }));
  }

  deleteUser(userId: number) {
    console.log('delete user', userId);

    this.store.dispatch(deleteUser({ userId }));
  }
}
