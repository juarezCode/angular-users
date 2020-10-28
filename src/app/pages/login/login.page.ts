import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/types/user';
import { LoginFacade } from './login.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {
  constructor(private loginFacade: LoginFacade) {}

  login(user: UserLogin) {
    this.loginFacade.login(user);
  }
}
