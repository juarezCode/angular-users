import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { deleteProduct } from '../../actions/product/delete-product.actions';
import { selectDeletingProduct } from '../../selectors/product/delete-product.selectors';
@Injectable({
  providedIn: 'root',
})
export class DeleteProductFacade {
  deletingProduct$ = this.store.pipe(select(selectDeletingProduct));

  constructor(private store: Store) {}

  deleteProduct(productId: number) {
    this.store.dispatch(deleteProduct({ productId }));
  }
}
