import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/types/product';

export const getProduct = createAction('[Product] Get Product', props<{ productId: number }>());
export const getProductSuccess = createAction(
  '[Product] Get Product Success',
  props<{ payload: Product }>(),
);
export const getProductError = createAction('[Product] Get Product Error', props<{ error: any }>());
