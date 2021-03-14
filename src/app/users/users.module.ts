import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './presentation/views/list-users/list-users.component';
import { PageUserComponent } from './presentation/pages/page-user/page-user.component';

@NgModule({
  declarations: [ListUsersComponent, PageUserComponent],
  imports: [CommonModule, UsersRoutingModule],
  exports: [PageUserComponent],
})
export class UsersModule {}
