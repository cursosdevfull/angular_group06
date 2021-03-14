import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PageDashboardComponent } from './presentation/pages/page-dashboard/page-dashboard.component';
import { StaticGraphComponent } from './presentation/views/static-graph/static-graph.component';

@NgModule({
  declarations: [PageDashboardComponent, StaticGraphComponent],
  imports: [CommonModule, DashboardRoutingModule],
  exports: [PageDashboardComponent],
})
export class DashboardModule {}
