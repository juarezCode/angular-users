import { createAction, props } from '@ngrx/store';
import { NewProduct } from 'src/app/types/product';
export const createProduct = createAction(
  '[Product] Create Product',
  props<{ payload: NewProduct }>(),
);

export const createProductSuccess = createAction('[Product] Create Product Success');

export const createProductError = createAction(
  '[Product] Create Product Error',
  props<{ error: any }>(),
);
