import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { PageDriverComponent } from './presentation/pages/page-driver/page-driver.component';
import { ListDriversComponent } from './presentation/views/list-drivers/list-drivers.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageDriverComponent, ListDriversComponent],
  imports: [CommonModule, DriversRoutingModule, SharedModule],
  exports: [PageDriverComponent],
})
export class DriversModule {}
