import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CartDetailComponent } from './cartDetail.component';
import { BrowserModule } from '@angular/platform-browser';
import { CartSummaryComponent } from './cartSummary.component';
import { CategoryFilterComponent } from './categoryFilter.component';
import { PaginationComponent } from './pagination.component';
import { ProductListComponent } from './productList.component';
import { RatingsComponent } from './ratings.component';
import { StoreRootComponent } from './storeRoot.component';
import { CheckoutDetailsComponent } from './checkoutDetails.component';
import { CheckoutPaymentComponent } from './checkoutPayment.component';
import { CheckoutSummaryComponent } from './checkoutSummary.component';
import { OrderConfirmationComponent } from './orderConfirmation.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule],
  exports: [StoreRootComponent],
  declarations: [
    CartSummaryComponent,
    StoreRootComponent,
    CategoryFilterComponent,
    PaginationComponent,
    ProductListComponent,
    RatingsComponent,
    CartDetailComponent,
    CheckoutDetailsComponent,
    CheckoutPaymentComponent,
    CheckoutSummaryComponent,
    OrderConfirmationComponent,
  ],
  providers: [],
})
export class StoreModule {}
