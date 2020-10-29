import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/types/product';

export const getProducts = createAction('[Product] Get Products');

export const getProductsSuccess = createAction(
  '[Product] Get Products Success',
  props<{ payload: Product[] }>(),
);

export const getProductsError = createAction(
  '[Product] Get Products Error',
  props<{ error: any }>(),
);
