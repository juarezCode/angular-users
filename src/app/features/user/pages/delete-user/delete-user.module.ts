import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteUserPage } from './delete-user.page';
import { DeleteUserComponentModule } from 'src/app/features/user/components/delete-user/delete-user.module';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [DeleteUserPage],
  imports: [CommonModule, DeleteUserComponentModule, MatCardModule, MatProgressBarModule],
})
export class DeleteUserModule {}
