import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { PageDriverComponent } from './presentation/pages/page-driver/page-driver.component';
import { ListDriversComponent } from './presentation/views/list-drivers/list-drivers.component';
import { SharedModule } from '../shared/shared.module';
import { FormDriverComponent } from './presentation/views/form-driver/form-driver.component';
import { DriverOperation } from './infraestructure/driver.operation';
import { DriverRepository } from './application/driver.repository';
import { DriverUseCase } from './application/driver.usecase';

@NgModule({
  declarations: [
    PageDriverComponent,
    ListDriversComponent,
    FormDriverComponent,
  ],
  imports: [CommonModule, DriversRoutingModule, SharedModule],
  exports: [PageDriverComponent],
  providers: [
    { provide: DriverRepository, useClass: DriverOperation },
    DriverUseCase,
  ],
})
export class DriversModule {}
