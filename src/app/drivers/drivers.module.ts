import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { PageDriverComponent } from './presentation/pages/page-driver/page-driver.component';
import { ListDriversComponent } from './presentation/views/list-drivers/list-drivers.component';

@NgModule({
  declarations: [PageDriverComponent, ListDriversComponent],
  imports: [CommonModule, DriversRoutingModule],
  exports: [PageDriverComponent],
})
export class DriversModule {}
