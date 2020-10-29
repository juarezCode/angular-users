import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTableComponent {
  @Input() products: Product[];

  @Input() loading: boolean;

  @Input() loaded: boolean;

  @Input() error: any;

  columns: string[] = ['No', 'name', 'price', 'description', 'actions'];

  constructor(private router: Router) {}

  selectProduct(id: string) {
    console.log(`product ${id}`);
  }

  navigateToDelete(id: number) {
    this.router.navigate([`/app/products/delete/${id}`]);
  }

  navigateToUpdate(id: number) {
    this.router.navigate([`/app/products/update/${id}`]);
  }
}
