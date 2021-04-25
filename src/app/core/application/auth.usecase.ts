import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from '../domain/auth.interface';
import { Token } from '../domain/token.interface';
import { AuthRepository } from './auth.repository';
import { StorageRepository } from './storage.repository';

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

  logout() {
    this.isUserLogged = false;
    this.storageRepository.clear();
    this.router.navigate(['/']);
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
}
