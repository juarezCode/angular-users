import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ProductUpdate } from 'src/app/types/product';
import { updateProduct } from '../../actions/product/update.product.actions';
import { selectUpdatingProduct } from '../../selectors/product/update-product.selectors';

@Injectable({
  providedIn: 'root',
})
export class UpdateProductFacade {
  updatingProduct$ = this.store.pipe(select(selectUpdatingProduct));

  constructor(private store: Store) {}

  updateProduct(product: ProductUpdate, productId: number) {
    this.store.dispatch(updateProduct({ payload: product, productId }));
  }
}
