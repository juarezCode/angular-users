import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectUserData } from '../../selectors/user/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  user$ = this.store.pipe(select(selectUserData));

  constructor(private store: Store) {}
}
