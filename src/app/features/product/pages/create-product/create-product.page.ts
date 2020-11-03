import { Component, OnInit } from '@angular/core';
import { CreateProductFacade } from 'src/app/store/facades/product/create-product.facade';
import { NewProduct } from 'src/app/types/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
})
export class CreateProductPage implements OnInit {
  creatingProduct$ = this.createProductFacade.creatingProduct$;

  constructor(private createProductFacade: CreateProductFacade) {}

  ngOnInit(): void {}

  createProduct(user: NewProduct) {
    this.createProductFacade.createProduct(user);
  }
}
