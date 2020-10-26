import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUsers } from 'src/app/store/actions/user/users.actions';
import { UserListFacade } from './user-list.facade';

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

  constructor(private userFacade: UserListFacade) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userFacade.getUsers();
  }
}
