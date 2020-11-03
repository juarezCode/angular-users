import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ProductAPI } from 'src/app/api/product.api';
import {
  createProduct,
  createProductError,
  createProductSuccess,
} from '../../actions/product/create-product.actions';

@Injectable()
export class CreateProductEffects {
  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProduct),
      switchMap(({ payload }) =>
        this.productAPI.createProduct(payload).pipe(
          map(() => createProductSuccess()),
          catchError((error) => of(createProductError({ error: error.error }))),
        ),
      ),
    ),
  );

  createProductSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createProductSuccess),
        tap(() => {
          this.snackbar.open('El producto ha sido creado exitosamente', null, {
            panelClass: 'primary',
          });
          this.router.navigate(['/app/products']);
        }),
      ),
    { dispatch: false },
  );

  createProductError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createProductError),
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
    private router: Router,
  ) {}
}
