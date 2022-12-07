import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let Stoken = JSON.parse(sessionStorage.getItem('user'));
    let sessionToken;
    if (Stoken) {
      sessionToken = Stoken.token;
    }

    const url = request.url.startsWith('/task')
    console.log(url);

    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + sessionToken,
      },
    });

    return next.handle(request);
  }
}
