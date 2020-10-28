import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeleteUserFacade } from '../../store/facades/user/delete-user.facade';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.page.html',
  styleUrls: ['./delete-user.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteUserPage {
  user$ = this.deleteUserFacade.user$;

  deleting$ = this.deleteUserFacade.deleting$;

  constructor(private deleteUserFacade: DeleteUserFacade) {}

  getUser(userId: number) {
    this.deleteUserFacade.getUser(userId);
  }

  deleteUser(userId: number) {
    this.deleteUserFacade.deleteUser(userId);
  }
}
