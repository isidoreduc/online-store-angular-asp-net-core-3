import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModelModule } from './models/module.model';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ModelModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
