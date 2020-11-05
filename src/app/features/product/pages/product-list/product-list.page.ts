import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFacade } from 'src/app/store/facades/auth/login.facade';
import { ProductsFacade } from 'src/app/store/facades/product/products.facade';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListPage implements OnInit {
  products$ = this.productsFacade.products$;

  loadedProducts$ = this.productsFacade.loadedProducts$;

  loadingProducts$ = this.productsFacade.loadingProducts$;

  errorProducts$ = this.productsFacade.errorProducts$;

  user$ = this.loginFacade.user$;

  constructor(
    private router: Router,
    private productsFacade: ProductsFacade,
    private loginFacade: LoginFacade,
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  createProduct() {
    this.router.navigate(['/app/products/create']);
  }

  getProducts() {
    this.productsFacade.getProducts();
  }

  adminUsers() {
    this.router.navigate(['/app/users']);
  }
}
