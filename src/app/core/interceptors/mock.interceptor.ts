import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpContextToken
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

const mockUsers: User[] = [
  { id: 74, name: 'Seph Manangan', email: 'sephm@magenic.com', age: 25 } as User,
  { id: 88, name: 'Lian Palermo', email: 'lanp@magenic.com', age: 26 } as User,
];

export const isGetAllUsers = new HttpContextToken<boolean>(() => false);

@Injectable()
export class MockInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // if (request.url === `${environment.apiRoot}/users`
    //   && request.method === 'GET') {
    //   return of(new HttpResponse({
    //     status: 200,
    //     body: mockUsers
    //   }))
    // }

    if (request.context.get(isGetAllUsers)) {
      return of(new HttpResponse({
        status: 200,
        body: mockUsers
      }))
    }

    return next.handle(request);
  }
}
