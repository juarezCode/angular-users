import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { NewProduct } from 'src/app/types/product';
import { createProduct } from '../../actions/product/create-product.actions';
import { selectCreatingProduct } from '../../selectors/product/create-product.selectors';

@Injectable({
  providedIn: 'root',
})
export class CreateProductFacade {
  creatingProduct$ = this.store.pipe(select(selectCreatingProduct));

  constructor(private store: Store) {}

  createProduct(user: NewProduct) {
    this.store.dispatch(createProduct({ payload: user }));
  }
}
