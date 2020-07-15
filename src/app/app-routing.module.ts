import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreRootComponent } from './store/storeRoot.component';
import { CartDetailComponent } from './store/cartDetail.component';

const routes: Routes = [
  { path: "cart", component: CartDetailComponent },
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
