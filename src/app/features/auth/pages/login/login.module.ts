import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login.page';
import { LoginFormModule } from 'src/app/features/auth/forms/login/login.module';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [LoginPage],
  imports: [CommonModule, LoginFormModule, MatProgressBarModule, MatCardModule],
})
export class LoginModule {}
