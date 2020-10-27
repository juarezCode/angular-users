import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserUpdate } from 'src/app/types/user';
import { UpdateUserFacade } from './update-user.facade';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateUserPage {
  updating$ = this.updateUserFacade.updating$;

  constructor(private updateUserFacade: UpdateUserFacade) {}

  updateUser(userUpdate: { user: UserUpdate; userId: number }) {
    const { user, userId } = userUpdate;
    this.updateUserFacade.updateUser(user, userId);
  }
}
