import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFacade } from 'src/app/store/facades/auth/login.facade';
import { UserListFacade } from 'src/app/store/facades/user/user-list.facade';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListPage implements OnInit {
  users$ = this.userFacade.users$;

  loadingUsers$ = this.userFacade.loadingUsers$;

  loadedUsers$ = this.userFacade.loadedUsers$;

  errorUsers$ = this.userFacade.errorUsers$;

  user$ = this.loginFacade.user$;

  constructor(
    private userFacade: UserListFacade,
    private loginFacade: LoginFacade,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  createUser() {
    this.router.navigate(['/app/create-user']);
  }

  getUsers() {
    this.userFacade.getUsers();
  }
}
