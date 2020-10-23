import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login.page';

@NgModule({
  declarations: [LoginPage],
  imports: [CommonModule],
  exports: [LoginPage],
})
export class LoginModule {}
