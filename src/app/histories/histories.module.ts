import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriesRoutingModule } from './histories-routing.module';
import { PageHistoryComponent } from './presentation/pages/page-history/page-history.component';
import { ListHistoriesComponent } from './presentation/views/list-histories/list-histories.component';

@NgModule({
  declarations: [PageHistoryComponent, ListHistoriesComponent],
  imports: [CommonModule, HistoriesRoutingModule],
  exports: [PageHistoryComponent],
})
export class HistoriesModule {}
