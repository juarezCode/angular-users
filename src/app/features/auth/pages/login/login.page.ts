import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginFacade } from 'src/app/store/facades/auth/login.facade';
import { UserLogin } from 'src/app/types/user';

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
