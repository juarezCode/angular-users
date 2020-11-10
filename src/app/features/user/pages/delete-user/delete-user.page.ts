import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeleteUserFacade } from 'src/app/store/facades/user/delete-user.facade';
import { UserFacade } from 'src/app/store/facades/user/user.facade';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.page.html',
  styleUrls: ['./delete-user.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteUserPage {
  deleting$ = this.deleteUserFacade.deleting$;

  user$ = this.userFacade.user$;

  constructor(private deleteUserFacade: DeleteUserFacade, private userFacade: UserFacade) {}

  getUser(userId: number) {
    this.deleteUserFacade.getUser(userId);
  }

  deleteUser(userId: number) {
    this.deleteUserFacade.deleteUser(userId);
  }
}
