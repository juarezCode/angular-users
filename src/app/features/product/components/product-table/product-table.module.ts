import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ProductTableComponent } from './product-table.component';

@NgModule({
  declarations: [ProductTableComponent],
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule, MatTableModule],
  exports: [ProductTableComponent],
})
export class ProductTableModule {}
