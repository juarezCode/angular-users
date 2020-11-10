import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserRole } from 'src/app/types/user';
import { selectAuthUser, selectAuthUserRole } from '../../selectors/auth/user-auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserAuthFacade {
  userRole$ = this.store.pipe(select(selectAuthUserRole));

  user$ = this.store.pipe(select(selectAuthUser));

  userFullName$: Observable<string> = this.user$.pipe(
    map((user) => `${user.name} ${user.lastName} (${user.username})`),
  );

  isAdmin$: Observable<boolean> = this.userRole$.pipe(map((role) => role === UserRole.ADMIN));

  constructor(private store: Store) {}
}
