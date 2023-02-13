import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._authService.tokenValue
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        },
      })
    }
    return next.handle(request)


    /* the code below breaks setError in auth-localstorage.ts */

    //   .pipe(
    //   catchError((err) => {
    //     if (err.status === 401) {
    //       this._authService.logout()
    //     }
    //
    //     const error = err.error.message
    //     return throwError(error);
    //   })
    // );
  }
}
