import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Console } from 'node:console';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap, retry } from 'rxjs/operators';
import { AuthUseCase } from 'src/app/core/application/auth.usecase';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    //private readonly authUseCase: AuthUseCase,
    private readonly injector: Injector
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authUseCase = this.injector.get(AuthUseCase);
    const accessToken = authUseCase.getStorage('accessToken');

    const requestCloned = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${accessToken}`),
    });

    return next.handle(requestCloned).pipe(
      catchError((error: HttpErrorResponse) => {
        if (!(error.error instanceof ErrorEvent) && error.status === 409) {
          const refreshToken = authUseCase.getStorage('refreshToken');
          return authUseCase.getNewAccessToken(refreshToken || '').pipe(
            retry(3),
            mergeMap((response: any) => {
              authUseCase.setStorage('accessToken', response.accessToken);

              const newRequestClone = req.clone({
                headers: req.headers.append(
                  'Authorization',
                  `Bearer ${response.accessToken}`
                ),
              });

              return next.handle(newRequestClone);
            })
          );
        } else if (error.status === 401) {
          return authUseCase.logout();
        } else {
          if (error.error && error.error.result) {
            return throwError(error.error.result);
          } else {
            return throwError(error);
          }
        }
      })
    );
  }
}
