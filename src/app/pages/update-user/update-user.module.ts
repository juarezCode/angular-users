import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateUserPage } from './update-user.page';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { UpdateUserFormModule } from 'src/app/forms/update-user/update-user.module';

@NgModule({
  declarations: [UpdateUserPage],
  imports: [CommonModule, UpdateUserFormModule, MatProgressBarModule, MatCardModule],
})
export class UpdateUserModule {}
