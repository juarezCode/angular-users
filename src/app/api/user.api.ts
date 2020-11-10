import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewUser, User, UserResponse, Users, UserUpdate } from '../types/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserAPI {
  private url = environment.endpoint;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<Users>(`${this.url}/users/get-all`)
      .pipe(map((response) => response.data.users));
  }

  getUser(userId: number): Observable<User> {
    return this.http
      .get<UserResponse>(`${this.url}/users/get-user-by-id/${userId}`, {
        headers: { 'No-token': 'true' },
      })
      .pipe(map((response) => response.data));
  }

  createUser(payload: NewUser): Observable<void> {
    return this.http.post(`${this.url}/users/create`, payload).pipe(map(() => null));
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete(`${this.url}/users/delete/${userId}`).pipe(map(() => null));
  }

  updateUser(userId: number, payload: UserUpdate): Observable<void> {
    return this.http.put(`${this.url}/users/update/${userId}`, payload).pipe(map(() => null));
  }
}
