import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicsRoutingModule } from './medics-routing.module';
import { PageMedicComponent } from './presentation/pages/page-medic/page-medic.component';
import { ListMedicsComponent } from './presentation/views/list-medics/list-medics.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageMedicComponent, ListMedicsComponent],
  imports: [CommonModule, MedicsRoutingModule, SharedModule],
  exports: [PageMedicComponent],
})
export class MedicsModule {}
