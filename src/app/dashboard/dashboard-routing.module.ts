import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageDashboardComponent } from './presentation/pages/page-dashboard/page-dashboard.component';

const routes: Routes = [
  { path: '', component: PageDashboardComponent, data: { fullscreen: false } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
