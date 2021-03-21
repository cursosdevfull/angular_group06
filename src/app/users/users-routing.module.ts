import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageUserComponent } from './presentation/pages/page-user/page-user.component';

const routes: Routes = [{ path: '', component: PageUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
