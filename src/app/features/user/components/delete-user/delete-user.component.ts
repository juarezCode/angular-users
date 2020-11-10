import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/types/user';

@Component({
  selector: 'delete-user-component',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteUserComponent implements OnInit {
  @Output() getUser: EventEmitter<number> = new EventEmitter();

  @Output('deleteUser') _deleteUser = new EventEmitter();

  @Input() user: User;

  constructor(private route: ActivatedRoute, private router: Router) {}

  private userId: number;

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('userId');
    this.getUser.emit(this.userId);
  }

  deleteUser() {
    this._deleteUser.emit(this.userId);
  }

  back() {
    this.router.navigate(['/app/users']);
  }
}
