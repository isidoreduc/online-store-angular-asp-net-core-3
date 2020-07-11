import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModelModule } from './models/module.model';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductTableComponent } from './structure/productTable.component';
import { CategoryFilterComponent } from './structure/categoryFilter.component';

@NgModule({
  declarations: [AppComponent, ProductTableComponent, CategoryFilterComponent],
  imports: [BrowserModule, AppRoutingModule, ModelModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
