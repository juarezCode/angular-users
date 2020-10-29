import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product, Products } from '../types/product';

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
}
