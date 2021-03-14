import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CoreModule } from './core/core.module';
import { MedicsModule } from './medics/medics.module';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { PageMedicComponent } from './medics/presentation/pages/page-medic/page-medic.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HistoriesModule } from './histories/histories.module';
import { DriversModule } from './drivers/drivers.module';
import { UsersModule } from './users/users.module';
import { PageDashboardComponent } from './dashboard/presentation/pages/page-dashboard/page-dashboard.component';
import { PageHistoryComponent } from './histories/presentation/pages/page-history/page-history.component';
import { PageDriverComponent } from './drivers/presentation/pages/page-driver/page-driver.component';
import { PageUserComponent } from './users/presentation/pages/page-user/page-user.component';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  { path: 'medics', component: PageMedicComponent },
  { path: 'dashboard', component: PageDashboardComponent },
  { path: 'histories', component: PageHistoryComponent },
  { path: 'drivers', component: PageDriverComponent },
  { path: 'users', component: PageUserComponent },
  { path: '**', redirectTo: '' },
  // { path: '**', component: PageLoginComponent },
];

@NgModule({
  declarations: [AppComponent, ItemComponent],
  imports: [
    BrowserModule,
    CoreModule,
    MedicsModule,
    DashboardModule,
    HistoriesModule,
    DriversModule,
    UsersModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
