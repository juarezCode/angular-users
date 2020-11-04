import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DeleteProductPage } from './delete-product.page';
import { DeleteProductComponentModule } from '../../components/delete-product/delete-product.module';

@NgModule({
  declarations: [DeleteProductPage],
  imports: [CommonModule, MatProgressBarModule, MatCardModule, DeleteProductComponentModule],
})
export class DeleteProductModule {}
