import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PageDashboardComponent } from './presentation/pages/page-dashboard/page-dashboard.component';
import { StaticGraphComponent } from './presentation/views/static-graph/static-graph.component';
import { SharedModule } from '../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CovidComponent } from './presentation/views/covid/covid.component';
import { CovidUseCase } from './application/covid.usecase';
import { CovidRepository } from './application/covid.repository';
import { CovidOperation } from './infrastructure/covid.operation';
import { VaccumComponent } from './presentation/views/vaccum/vaccum.component';
import { SocketUseCase } from './application/socket.usecase';
import { SocketOperation } from './infrastructure/socket.operation';
import { SocketRepository } from './application/socket.repository';

@NgModule({
  declarations: [
    PageDashboardComponent,
    StaticGraphComponent,
    CovidComponent,
    VaccumComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxChartsModule,
  ],
  exports: [PageDashboardComponent],
  providers: [
    CovidUseCase,
    { provide: CovidRepository, useClass: CovidOperation },
    SocketUseCase,
    { provide: SocketRepository, useClass: SocketOperation },
  ],
})
export class DashboardModule {}
