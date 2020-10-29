import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getProducts } from '../../actions/product/products.actions';
import {
  selectErrorProducts,
  selectLoadedProducts,
  selectLoadingProducts,
  selectProducts,
} from '../../selectors/product/products.selectors';

@Injectable({
  providedIn: 'root',
})
export class ProductsFacade {
  products$ = this.store.pipe(select(selectProducts));

  loadedProducts$ = this.store.pipe(select(selectLoadedProducts));

  loadingProducts$ = this.store.pipe(select(selectLoadingProducts));

  errorProducts$ = this.store.pipe(select(selectErrorProducts));

  constructor(private store: Store) {}

  getProducts() {
    this.store.dispatch(getProducts());
  }
}
