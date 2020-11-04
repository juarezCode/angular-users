import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DeleteProductComponent } from './delete-product.component';

@NgModule({
  declarations: [DeleteProductComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [DeleteProductComponent],
})
export class DeleteProductComponentModule {}
