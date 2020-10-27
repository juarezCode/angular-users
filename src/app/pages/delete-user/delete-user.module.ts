import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteUserPage } from './delete-user.page';
import { DeleteUserComponentModule } from 'src/app/components/delete-user/delete-user.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [DeleteUserPage],
  imports: [CommonModule, DeleteUserComponentModule, MatCardModule],
})
export class DeleteUserModule {}
