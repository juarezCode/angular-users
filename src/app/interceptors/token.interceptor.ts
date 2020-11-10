import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, filter, map, switchMap, take, takeUntil } from 'rxjs/operators';
import { AuthAPI } from '../api/auth.api';
import { login } from '../store/actions/auth/login.actions';
import { LoginFacade } from '../store/facades/auth/login.facade';
import { TokenFacade } from '../store/facades/auth/token.facade';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private reactivatingToken$ = new BehaviorSubject(false);

  private destroy$ = new Subject();

  constructor(
    private tokenFacade: TokenFacade,
    private loginFacade: LoginFacade,
    private authAPI: AuthAPI,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const withoutToken = req.headers.has('No-Token');

    if (withoutToken) return next.handle(req.clone({ headers: req.headers.delete('No-Token') }));

    return this.reactivatingToken$.pipe(
      takeUntil(this.destroy$),
      filter((reactivatingToken) => !reactivatingToken),
      switchMap(() => this.tokenFacade.token$),
      take(1),
      switchMap((token) => {
        const newRequest = req.clone({
          setHeaders: {
            token,
          },
        });

        return next.handle(newRequest).pipe(
          catchError((response: HttpErrorResponse) => {
            if (response.status !== 401) {
              return throwError(response);
            }

            return throwError(response);
            // return this.loginFacade.user$.pipe(
            //   switchMap(({ password, email }) => {
            //     return this.authAPI.login({ password, email }).pipe(map((res) => res.token));
            //     // return this.store.dispatch(login({payload: { password, email }}))
            //   }),
            //   switchMap(() => next.handle(newRequest)),
            //   catchError((error: HttpErrorResponse) => {
            //     this.destroy$.next();
            //     return throwError(error);
            //   }),
            // );
          }),
        );
      }),
    );
  }
}
