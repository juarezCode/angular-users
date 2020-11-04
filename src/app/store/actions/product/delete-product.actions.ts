import { createAction, props } from '@ngrx/store';

export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ productId: number }>(),
);

export const deleteProductSuccess = createAction('[Product] Delete Product Success');

export const deleteProductError = createAction(
  '[Product] Delete Product Error',
  props<{ error: any }>(),
);
