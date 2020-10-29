import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductListPage } from './product-list.page';
import { ProductTableModule } from '../../components/product-table/product-table.module';

@NgModule({
  declarations: [ProductListPage],
  imports: [CommonModule, MatButtonModule, MatCardModule, ProductTableModule],
})
export class ProductListModule {}
