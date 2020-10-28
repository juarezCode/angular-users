import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NewUser } from 'src/app/types/user';
import { CreateUserFacade } from '../../store/facades/user/create-user.facade';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserPage {
  creatingUser$ = this.createUserFacade.creatingUser$;

  constructor(private createUserFacade: CreateUserFacade) {}

  createUser(user: NewUser) {
    this.createUserFacade.createUser(user);
  }
}
