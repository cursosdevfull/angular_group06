import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './presentation/pages/page-login/page-login.component';
import { LoginComponent } from './presentation/views/login/login.component';
import { MenuComponent } from './presentation/views/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './presentation/views/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthOperation } from './infraestructure/auth.operation';
import { AuthRepository } from './application/auth.repository';
import { StorageRepository } from './application/storage.repository';
import { StorageOperation } from './infraestructure/storage.operation';
@NgModule({
  declarations: [
    PageLoginComponent,
    LoginComponent,
    MenuComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [PageLoginComponent, MenuComponent, HeaderComponent],
  providers: [
    { provide: AuthRepository, useClass: AuthOperation },
    { provide: StorageRepository, useClass: StorageOperation },
  ],
})
export class CoreModule {}
