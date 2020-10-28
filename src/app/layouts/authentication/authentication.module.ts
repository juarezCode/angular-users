import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationLayout } from './authentication.layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthenticationLayout],
  imports: [CommonModule, MatSidenavModule, RouterModule],
  exports: [AuthenticationLayout],
})
export class AuthenticationLayoutModule {}
