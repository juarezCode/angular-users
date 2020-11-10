import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectToken } from '../../selectors/auth/token.selectors';

@Injectable({
  providedIn: 'root',
})
export class TokenFacade {
  token$ = this.store.pipe(select(selectToken));

  constructor(private store: Store) {}
}
