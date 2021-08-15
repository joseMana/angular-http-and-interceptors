import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';
import { isGetAllUsers } from '../interceptors/mock.interceptor';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /*
    VERB - get, post, put, delete, patch, options
    URL - 'http://localhost:3000/users'
    HEADERS - { 'Authorization', 'Bearer eyASHASJKFHASJKFHAK' }
    BODY - { name: 'test' }
  */

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.apiRoot}/users`, {
      // headers: { 'isGetAllUsers': 'true' },
      // observe: 'response'
      // params: new HttpParams()
      //   .set('id', 1)
      context: new HttpContext()
        .set(isGetAllUsers, true)
    });
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiRoot}/users/${id}`);
  }

  add(user: User): Observable<User> {
    return this.httpClient.post<User>(`${environment.apiRoot}/users`, user);
  }

  update(user: User) {
    return this.httpClient.put<User>(`${environment.apiRoot}/users/${user?.id}`, user);
  }

  delete(id: number) {
    return this.httpClient.delete<User>(`${environment.apiRoot}/users/${id}`);
  }
}
