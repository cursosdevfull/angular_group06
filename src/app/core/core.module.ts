import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './presentation/pages/page-login/page-login.component';
import { LoginComponent } from './presentation/views/login/login.component';
import { MenuComponent } from './presentation/views/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [PageLoginComponent, LoginComponent, MenuComponent],
  imports: [CommonModule, RouterModule, MatListModule],
  exports: [PageLoginComponent, MenuComponent],
})
export class CoreModule {}
