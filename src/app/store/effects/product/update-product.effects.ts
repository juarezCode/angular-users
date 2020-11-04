import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ProductAPI } from 'src/app/api/product.api';
import {
  updateProduct,
  updateProductError,
  updateProductSuccess,
} from '../../actions/product/update.product.actions';

@Injectable()
export class UpdateProductEffects {
  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProduct),
      switchMap(({ payload, productId }) => {
        return this.productAPI.updateProduct(productId, payload).pipe(
          map(() => updateProductSuccess()),
          catchError((error) => of(updateProductError({ error: error.error }))),
        );
      }),
    ),
  );

  updateProductSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateProductSuccess),
        tap(() => {
          this.snackbar.open('Se ha actualizado el producto exitosamente', null, {
            panelClass: 'primary',
          });
          this.router.navigate(['/app/products']);
        }),
      ),
    { dispatch: false },
  );

  updateProductError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateProductError),
        tap(() =>
          this.snackbar.open('Algo salió mal, vuelva a intentarlo', null, {
            panelClass: 'warn',
          }),
        ),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private productAPI: ProductAPI,
    private router: Router,
    private snackbar: MatSnackBar,
  ) {}
}
