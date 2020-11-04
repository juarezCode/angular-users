import { createSelector } from '@ngrx/store';
import { selectProduct } from './feature';

const productReducer = createSelector(selectProduct, (state) => state.product);

export const selectProductData = createSelector(productReducer, (state) => state.result);
