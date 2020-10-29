import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UserListPage } from './user-list.page';
import { MatButtonModule } from '@angular/material/button';
import { UserTableComponentModule } from 'src/app/components/user-table/user-table.module';

@NgModule({
  declarations: [UserListPage],
  imports: [CommonModule, UserTableComponentModule, MatCardModule, MatButtonModule],
  exports: [UserListPage],
})
export class UserListModule {}
