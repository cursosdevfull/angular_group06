import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes.component';
import { ItemComponent } from './item/item.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, ItemComponent],
  imports: [BrowserModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
