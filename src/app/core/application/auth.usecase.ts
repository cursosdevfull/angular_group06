import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Auth } from '../domain/auth.interface';
import { Token } from '../domain/token.interface';
import { AuthRepository } from './auth.repository';
import { StorageRepository } from './storage.repository';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthUseCase {
  private isUserLogged: boolean = false;

  constructor(
    private readonly authRepository: AuthRepository,
    private readonly storageRepository: StorageRepository,
    private readonly router: Router
  ) {}

  login(auth: Auth): Observable<Token> {
    return this.authRepository.login(auth);
  }

  logout(): Observable<any> {
    this.isUserLogged = false;
    this.storageRepository.clear();
    this.router.navigate(['/']);

    return of();
  }

  changeStatusUser(status: boolean) {
    this.isUserLogged = status;
  }

  getStatusUser(): boolean {
    return (
      this.isUserLogged || !!this.storageRepository.getStorage('accessToken')
    );
  }

  setStorage(nameProperty: string, value: string) {
    this.storageRepository.setStorage(nameProperty, value);
  }

  getStorage(nameProperty: string): string | null {
    return this.storageRepository.getStorage(nameProperty);
  }

  getNewAccessToken(refreshToken: string) {
    return this.authRepository.getNewAccessToken(refreshToken);
  }

  getFieldInToken(fieldName: string) {
    const accessToken: string = this.getStorage('accessToken') || '';
    const payload: any = jwt_decode(accessToken);
    /*     {
      "iat": 1620569652,
      "exp": 1620569682,
      "name": "sergio",
      "email": "sergio@correo.com",
      "roles": [
        "ADMIN",
        "OPERATOR"
      ]
    } */

    return payload[fieldName];
  }
}
