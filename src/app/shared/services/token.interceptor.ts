import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthUseCase } from 'src/app/core/application/auth.usecase';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private readonly authUseCase: AuthUseCase) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.authUseCase.getStorage('accessToken');

    const requestCloned = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${accessToken}`),
    });

    return next.handle(requestCloned).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
        } else if (error.status === 401) {
        } else if (error.status === 409) {
        } else {
          if (error.error && error.error.result) {
            if (error.status === 404) {
              console.log(error.error.result);
            }

            return throwError(error.error.result);
          }
        }
      })
    );
  }
}
