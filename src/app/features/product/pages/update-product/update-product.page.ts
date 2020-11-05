import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductFacade } from 'src/app/store/facades/product/product.facade';
import { UpdateProductFacade } from 'src/app/store/facades/product/update-product.facade';
import { ProductUpdate } from 'src/app/types/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.page.html',
  styleUrls: ['./update-product.page.scss'],
})
export class UpdateProductPage implements OnInit {
  product$ = this.productFacade.product$;

  updating$ = this.updateProductFacade.updatingProduct$;

  id: number;

  constructor(
    private route: ActivatedRoute,
    private productFacade: ProductFacade,
    private updateProductFacade: UpdateProductFacade,
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('productId');
    this.getProduct(this.id);
  }

  getProduct(productId: number) {
    this.productFacade.getProduct(productId);
  }

  updateProduct(product: ProductUpdate) {
    this.updateProductFacade.updateProduct(product, this.id);
  }
}
