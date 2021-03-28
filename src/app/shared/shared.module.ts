import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContainerComponent } from './components/container/container.component';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [TitleComponent, ContainerComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
  ],
  exports: [TitleComponent, ContainerComponent],
})
export class SharedModule {}
