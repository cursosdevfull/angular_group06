import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { LogService } from './shared/services/log.service';
import { IconService } from './shared/services/icon.service';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Paginator } from './shared/classes/paginator';
import { SharedModule } from './shared/shared.module';
import { ConfigModule } from './config/modules/config.module';
import { AMB_Config } from './config/constants/config.constants';

@NgModule({
  declarations: [AppComponent, ItemComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatSidenavModule,
    HttpClientModule,
    MatIconModule,
    FlexLayoutModule,
    ConfigModule.forRoot(AMB_Config),
  ],
  providers: [
    LogService,
    { provide: MatPaginatorIntl, useClass: Paginator },
    //{provide: MenuService, useClass: MenuService}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private IconService: IconService) {}
}
