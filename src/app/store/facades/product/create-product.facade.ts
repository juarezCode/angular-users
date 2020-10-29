import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { NewProduct } from 'src/app/types/product';

@Injectable({
  providedIn: 'root',
})
export class CreateProductFacade {
  constructor(private store: Store) {}

  createProduct(user: NewProduct) {
    console.log(user);
    // this.store.dispatch()
  }
}
