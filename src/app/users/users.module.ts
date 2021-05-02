import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './presentation/views/list-users/list-users.component';
import { PageUserComponent } from './presentation/pages/page-user/page-user.component';
import { SharedModule } from '../shared/shared.module';
import { UserRepository } from './application/user.repository';
import { UserUseCase } from './application/user.usecase';
import { UserOperation } from './infraestructure/user.operation';
import { FormUserComponent } from './presentation/views/form-user/form-user.component';

@NgModule({
  declarations: [ListUsersComponent, PageUserComponent, FormUserComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
  exports: [PageUserComponent],
  providers: [
    { provide: UserRepository, useClass: UserOperation },
    UserUseCase,
  ],
})
export class UsersModule {}
