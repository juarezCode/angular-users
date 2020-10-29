import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { CreateProductPage } from './create-product.page';
import { CreateProductFormModule } from '../../forms/create-product/create-product.module';

@NgModule({
  declarations: [CreateProductPage],
  imports: [CommonModule, MatProgressBarModule, MatCardModule, CreateProductFormModule],
})
export class CreateProductModule {}
