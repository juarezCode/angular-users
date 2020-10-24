import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewUser, User, Users } from '../types/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserAPI {
  private url = environment.endpoint;
  private myToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibmFtZWVlIiwiZW1haWwiOiJqdWFuMTFAZ21haWwuY29tIiwiaWF0IjoxNjAzMjM3MDA5LCJleHAiOjE2MDMzMjM0MDl9.6tffRLaVqozZrRsx1OlG1rGLyD38wg0MjnNb0RIWNYA';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<Users>(`${this.url}/users/get-all`, {
        headers: { token: this.myToken },
      })
      .pipe(map((response) => response.data.users));
  }

  createUser(payload: NewUser): Observable<void> {
    return this.http
      .post(`${this.url}/users/create`, payload, {
        headers: { token: this.myToken },
      })
      .pipe(map(() => null));
  }
}
