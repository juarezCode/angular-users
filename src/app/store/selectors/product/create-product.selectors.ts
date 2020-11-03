import { createSelector } from '@ngrx/store';
import { selectProduct } from './feature';

const createProductReducer = createSelector(selectProduct, (state) => state.createProduct);

export const selectCreatingProduct = createSelector(createProductReducer, (state) => state.loading);
