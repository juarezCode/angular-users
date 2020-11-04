import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeleteProductFacade } from 'src/app/store/facades/product/delete-product.facade';
import { ProductFacade } from 'src/app/store/facades/product/product.facade';

@Component({
  selector: 'delete-product-page',
  templateUrl: './delete-product.page.html',
  styleUrls: ['./delete-product.page.scss'],
})
export class DeleteProductPage implements OnInit {
  product$ = this.productFacade.product$;

  deletingProduct$ = this.deleteProductFacade.deletingProduct$;

  constructor(
    private route: ActivatedRoute,
    private deleteProductFacade: DeleteProductFacade,
    private productFacade: ProductFacade,
  ) {}

  id: number;

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('productId');
    this.getProduct(this.id);
  }

  getProduct(productId: number) {
    this.productFacade.getProduct(productId);
  }

  deleteProduct() {
    this.deleteProductFacade.deleteProduct(this.id);
  }
}
