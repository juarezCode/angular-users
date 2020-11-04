import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ProductAPI } from 'src/app/api/product.api';
import {
  getProduct,
  getProductError,
  getProductSuccess,
} from '../../actions/product/product.actions';

@Injectable()
export class ProductEffects {
  getProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProduct),
      switchMap(({ productId }) => {
        return this.productAPI.getProduct(productId).pipe(
          map((payload) => getProductSuccess({ payload })),
          catchError((error) => of(getProductError({ error: error.error }))),
        );
      }),
    ),
  );

  getProductError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(getProductError),
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
