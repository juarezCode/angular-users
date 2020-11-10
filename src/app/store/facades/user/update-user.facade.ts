import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { updateUser } from 'src/app/store/actions/user/update-user.actions';
import { getUser } from 'src/app/store/actions/user/user.actions';
import { selectUpdatingUser } from 'src/app/store/selectors/user/update-user.selectors';
import { selectUserData } from 'src/app/store/selectors/user/user.selectors';
import { UserUpdate } from 'src/app/types/user';

@Injectable({
  providedIn: 'root',
})
export class UpdateUserFacade {
  updating$ = this.store.pipe(select(selectUpdatingUser));

  constructor(private store: Store) {}

  updateUser(user: UserUpdate, userId: number) {
    this.store.dispatch(updateUser({ payload: user, userId }));
  }

  getUser(userId: number) {
    this.store.dispatch(getUser({ userId }));
  }
}
