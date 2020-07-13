import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CartSummaryComponent } from './cartSummary.component';
import { CategoryFilterComponent } from './categoryFilter.component';
import { PaginationComponent } from './pagination.component';
import { ProductListComponent } from './productList.component';
import { RatingsComponent } from './ratings.component';
import { StoreRootComponent } from './storeRoot.component';
@NgModule({
  imports: [BrowserModule],
  exports: [StoreRootComponent],
  declarations: [
    CartSummaryComponent,
    StoreRootComponent,
    CategoryFilterComponent,
    PaginationComponent,
    ProductListComponent,
    RatingsComponent,
  ],
  providers: [],
})
export class StoreModule {}
