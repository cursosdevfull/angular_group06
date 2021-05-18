import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { AuthUseCase } from 'src/app/core/application/auth.usecase';

@Injectable()
export class AuthenticationGuard implements CanLoad {
  constructor(private authUseCase: AuthUseCase) {}

  canLoad(): boolean {
    return this.authUseCase.getStatusUser();
  }
}
