import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NewProduct, Product, ProductResponse, Products } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductAPI {
  private url = environment.endpoint;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Products>(`${this.url}/products/get-all`)
      .pipe(map((response) => response.data.products));
  }

  getProduct(productId: number): Observable<Product> {
    return this.http
      .get<ProductResponse>(`${this.url}/products/get-product-by-id/${productId}`)
      .pipe(map((response) => response.data));
  }

  createProduct(payload: NewProduct): Observable<void> {
    return this.http.post(`${this.url}/products/create`, payload).pipe(map(() => null));
  }

  deteleProduct(productId: number): Observable<void> {
    return this.http.delete(`${this.url}/products/delete/${productId}`).pipe(map(() => null));
  }
}
