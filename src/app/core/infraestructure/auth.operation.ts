import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthRepository } from '../application/auth.repository';
import { Auth } from '../domain/auth.interface';
import { Token } from '../domain/token.interface';

@Injectable()
export class AuthOperation extends AuthRepository {
  constructor(private readonly http: HttpClient) {
    super();
  }

  login(auth: Auth): Observable<Token> {
    return this.http.post<Token>(
      `${environment.pathAPIRest}/users/login`,
      auth
    );
  }

  getNewAccessToken(refreshToken: string): Observable<any> {
    return this.http.get(
      `${environment.pathAPIRest}/users/refresh/${refreshToken}`
    );
  }
}
