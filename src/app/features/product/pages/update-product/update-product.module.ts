import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProductPage } from './update-product.page';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { UpdateProductFormModule } from '../../forms/update-product/update-product.module';

@NgModule({
  declarations: [UpdateProductPage],
  imports: [CommonModule, UpdateProductFormModule, MatCardModule, MatProgressBarModule],
})
export class UpdateProductModule {}
