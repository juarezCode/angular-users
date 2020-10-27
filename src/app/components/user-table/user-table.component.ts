import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  columnas: string[] = ['No', 'name', 'email', 'actions'];

  constructor(private router: Router) {}

  selectUser(id: string) {
    console.log(`user ${id}`);
  }

  createUser() {
    this.router.navigate(['/app/create-user']);
  }

  navigateToDelete(id: number) {
    this.router.navigate([`/app/delete-user/${id}`]);
  }

  navigateToUpdate(id: number) {
    this.router.navigate([`/app/update-user/${id}`]);
  }
}
