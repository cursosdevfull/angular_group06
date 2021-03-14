import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicsRoutingModule } from './medics-routing.module';
import { PageMedicComponent } from './presentation/pages/page-medic/page-medic.component';
import { ListMedicsComponent } from './presentation/views/list-medics/list-medics.component';

@NgModule({
  declarations: [PageMedicComponent, ListMedicsComponent],
  imports: [CommonModule, MedicsRoutingModule],
  exports: [PageMedicComponent],
})
export class MedicsModule {}
