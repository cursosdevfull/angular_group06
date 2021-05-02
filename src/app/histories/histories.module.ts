import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriesRoutingModule } from './histories-routing.module';
import { PageHistoryComponent } from './presentation/pages/page-history/page-history.component';
import { ListHistoriesComponent } from './presentation/views/list-histories/list-histories.component';
import { SharedModule } from '../shared/shared.module';
import { HistoryRepository } from './application/history.repository';
import { HistoryUseCase } from './application/history.usecase';
import { HistoryOperation } from './infraestructure/history.operation';
import { FormHistoryComponent } from './presentation/views/form-history/form-history.component';

@NgModule({
  declarations: [
    PageHistoryComponent,
    ListHistoriesComponent,
    FormHistoryComponent,
  ],
  imports: [CommonModule, HistoriesRoutingModule, SharedModule],
  exports: [PageHistoryComponent],
  providers: [
    { provide: HistoryRepository, useClass: HistoryOperation },
    HistoryUseCase,
  ],
})
export class HistoriesModule {}
