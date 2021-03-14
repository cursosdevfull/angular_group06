import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CoreModule } from './core/core.module';
import { MedicsModule } from './medics/medics.module';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { PageMedicComponent } from './medics/presentation/pages/page-medic/page-medic.component';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  { path: 'medics', component: PageMedicComponent },
];

@NgModule({
  declarations: [AppComponent, ItemComponent],
  imports: [
    BrowserModule,
    CoreModule,
    MedicsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
