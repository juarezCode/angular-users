import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserPage } from './create-user.page';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { CreateUserFormModule } from 'src/app/features/user/forms/create-user/create-user.module';

@NgModule({
  declarations: [CreateUserPage],
  imports: [CommonModule, MatProgressBarModule, MatCardModule, CreateUserFormModule],
})
export class CreateUserModule {}
