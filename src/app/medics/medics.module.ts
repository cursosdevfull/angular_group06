import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicsRoutingModule } from './medics-routing.module';
import { PageMedicComponent } from './presentation/pages/page-medic/page-medic.component';
import { ListMedicsComponent } from './presentation/views/list-medics/list-medics.component';
import { SharedModule } from '../shared/shared.module';
import { MedicRepository } from './application/medic.repository';
import { MedicUseCase } from './application/medic.usecase';
import { MedicOperation } from './infraestructure/medic.operation';
import { FormMedicComponent } from './presentation/views/form-medic/form-medic.component';

@NgModule({
  declarations: [PageMedicComponent, ListMedicsComponent, FormMedicComponent],
  imports: [CommonModule, MedicsRoutingModule, SharedModule],
  exports: [PageMedicComponent],
  providers: [
    { provide: MedicRepository, useClass: MedicOperation },
    MedicUseCase,
  ],
})
export class MedicsModule {}
