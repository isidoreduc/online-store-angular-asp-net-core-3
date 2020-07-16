import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreRootComponent } from './store/storeRoot.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutDetailsComponent } from './store/checkoutDetails.component';
import { CheckoutPaymentComponent } from './store/checkoutPayment.component';
import { CheckoutSummaryComponent } from './store/checkoutSummary.component';
import { OrderConfirmationComponent } from './store/orderConfirmation.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((module) => module.AdminModule),
  },
  { path: 'checkout/step1', component: CheckoutDetailsComponent },
  { path: 'checkout/step2', component: CheckoutPaymentComponent },
  { path: 'checkout/step3', component: CheckoutSummaryComponent },
  { path: 'checkout/confirmation', component: OrderConfirmationComponent },
  { path: 'checkout', redirectTo: '/checkout/step1', pathMatch: 'full' },
  { path: 'cart', component: CartDetailComponent },
  { path: 'store/:category/:page', component: StoreRootComponent },
  { path: 'store/:categoryOrPage', component: StoreRootComponent },
  { path: 'store/:category', component: StoreRootComponent },
  { path: 'store', component: StoreRootComponent },
  { path: '', redirectTo: '/store', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
