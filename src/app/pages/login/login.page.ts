import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/types/user';
import { LoginFacade } from '../../store/facades/auth/login.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {
  logging$ = this.loginFacade.logging$;

  constructor(private loginFacade: LoginFacade) {}

  login(user: UserLogin) {
    this.loginFacade.login(user);
  }
}
