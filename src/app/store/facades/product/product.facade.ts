import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getProduct } from '../../actions/product/product.actions';
import { selectProductData } from '../../selectors/product/product.selectors';

@Injectable({
  providedIn: 'root',
})
export class ProductFacade {
  product$ = this.store.pipe(select(selectProductData));

  constructor(private store: Store) {}

  getProduct(productId: number) {
    this.store.dispatch(getProduct({ productId }));
  }
}
