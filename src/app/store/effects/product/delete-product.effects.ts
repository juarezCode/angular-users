import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ProductAPI } from 'src/app/api/product.api';
import {
  deleteProduct,
  deleteProductError,
  deleteProductSuccess,
} from '../../actions/product/delete-product.actions';

@Injectable()
export class DeleteProductEffects {
  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProduct),
      switchMap(({ productId }) => {
        return this.productAPI.deteleProduct(productId).pipe(
          map(() => deleteProductSuccess()),
          catchError((error) => of(deleteProductError({ error: error.error }))),
        );
      }),
    ),
  );

  deleteProductSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteProductSuccess),
        tap(() => {
          this.snackbar.open('Se ha eliminado el producto exitosamente', null, {
            panelClass: 'primary',
          });
          this.router.navigate(['/app/products']);
        }),
      ),
    { dispatch: false },
  );

  deleteProductError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteProductError),
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
