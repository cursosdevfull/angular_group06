import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

const routes: Routes = [
  { path: '', component: PageLoginComponent, data: { fullscreen: true } },
  {
    path: 'medics',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./medics/medics.module').then((m) => m.MedicsModule),
  },
  {
    path: 'histories',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./histories/histories.module').then((m) => m.HistoriesModule),
  },
  {
    path: 'drivers',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./drivers/drivers.module').then((m) => m.DriversModule),
  },
  {
    path: 'users',
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'dashboard',
    data: { fullscreen: false },
    canLoad: [AuthenticationGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
