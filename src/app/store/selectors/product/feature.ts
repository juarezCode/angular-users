import { createFeatureSelector, createReducer } from '@ngrx/store';
import { AppState } from '../../reducers';
import * as fromProduct from '../../reducers/product';

export const selectProduct = createFeatureSelector<AppState, fromProduct.State>(fromProduct.key);
