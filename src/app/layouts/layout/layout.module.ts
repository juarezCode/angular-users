import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, MatSidenavModule, MatCardModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
