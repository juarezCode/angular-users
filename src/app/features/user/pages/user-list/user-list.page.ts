import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthFacade } from 'src/app/store/facades/auth/user.auth.facade';
import { UserListFacade } from 'src/app/store/facades/user/user-list.facade';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListPage implements OnInit {
  users$ = this.usersFacade.users$;

  loadingUsers$ = this.usersFacade.loadingUsers$;

  loadedUsers$ = this.usersFacade.loadedUsers$;

  errorUsers$ = this.usersFacade.errorUsers$;

  userFullName$ = this.userAuthFacade.userFullName$;

  constructor(
    private usersFacade: UserListFacade,
    private router: Router,
    private userAuthFacade: UserAuthFacade,
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  createUser() {
    this.router.navigate(['/app/users/create']);
  }

  getUsers() {
    this.usersFacade.getUsers();
  }
}
