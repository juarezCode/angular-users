import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/types/user';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTableComponent {
  @Input() users: User[];

  @Input() loading: boolean;

  @Input() loaded: boolean;

  @Input() error: any;

  columnas: string[] = ['No', 'name', 'username', 'email'];

  selectUser(id: string) {
    console.log(`user ${id}`);
  }
}