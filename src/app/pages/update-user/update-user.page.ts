import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserUpdate } from 'src/app/types/user';
import { UpdateUserFacade } from '../../store/facades/user/update-user.facade';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateUserPage implements OnInit {
  updating$ = this.updateUserFacade.updating$;

  user$ = this.updateUserFacade.user$;

  id: number;

  constructor(private updateUserFacade: UpdateUserFacade, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('userId');
    this.getUser(this.id);
  }

  updateUser(user: UserUpdate) {
    this.updateUserFacade.updateUser(user, this.id);
  }

  getUser(userId: number) {
    this.updateUserFacade.getUser(userId);
  }
}
