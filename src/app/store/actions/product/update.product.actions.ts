import { createAction, props } from '@ngrx/store';
import { ProductUpdate } from 'src/app/types/product';

export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ payload: ProductUpdate; productId: number }>(),
);

export const updateProductSuccess = createAction('[Product] Update Product Success');

export const updateProductError = createAction(
  '[Product] Update Product Error',
  props<{ error: any }>(),
);
