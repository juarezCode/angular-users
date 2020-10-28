import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginFacade } from '../store/facades/auth/login.facade';

@Injectable({
  providedIn: 'root',
})
export class SessionGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> {
    return this.loginFacade.sessionStarted$.pipe(
      map((sessionStarted) => {
        if (sessionStarted) return true;

        return this.router.parseUrl('/login');
      }),
    );
  }

  constructor(private loginFacade: LoginFacade, private router: Router) {}
}
