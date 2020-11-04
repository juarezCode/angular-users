import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'delete-product-component',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteProductComponent {
  @Input() product: Product;

  @Output('deleteProduct') _deleteProduct = new EventEmitter();

  constructor(private router: Router) {}

  back() {
    this.router.navigate(['/app/products']);
  }

  deleteProduct() {
    this._deleteProduct.emit();
  }
}
