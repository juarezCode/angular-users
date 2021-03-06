import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginResponse, UserLogin } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class AuthAPI {
  private url = environment.endpoint;

  constructor(private http: HttpClient) {}

  login(payload: UserLogin): Observable<{ token: string; userId: number }> {
    return this.http
      .post<LoginResponse>(`${this.url}/users/login`, payload, {
        headers: { 'No-token': 'true' },
      })
      .pipe(map((response) => response.data));
  }
}
