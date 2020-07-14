import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModelModule } from './models/model.module';
import { StoreModule } from './store/store.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ModelModule, StoreModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
