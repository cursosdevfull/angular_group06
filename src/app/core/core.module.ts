import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './presentation/pages/page-login/page-login.component';
import { LoginComponent } from './presentation/views/login/login.component';

@NgModule({
  declarations: [PageLoginComponent, LoginComponent],
  imports: [CommonModule],
  exports: [PageLoginComponent],
})
export class CoreModule {}
