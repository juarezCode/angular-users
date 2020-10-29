import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ProductAPI } from 'src/app/api/product.api';
import {
  getProducts,
  getProductsError,
  getProductsSuccess,
} from '../../actions/product/products.actions';

@Injectable()
export class ProductsEffects {
  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProducts),
      switchMap(() => {
        return this.productAPI.getProducts().pipe(
          map((payload) => getProductsSuccess({ payload })),
          catchError((error) => of(getProductsError({ error: error.error }))),
        );
      }),
    ),
  );

  getProductsError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getProductsError),
        tap(() => {
          this.snackbar.open('Algo salió mal, vuelva a intentarlo', null, { panelClass: 'warn' });
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private productAPI: ProductAPI,
    private snackbar: MatSnackBar,
  ) {}
}
