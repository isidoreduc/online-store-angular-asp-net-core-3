import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductTableComponent } from './structure/productTable.component';
import { ProductDetailComponent } from './structure/productDetail.component';
import { StoreRootComponent } from './store/storeRoot.component';

const routes: Routes = [
  // { path: 'table', component: ProductTableComponent },
  // { path: 'detail', component: ProductDetailComponent },
  // { path: 'detail/:id', component: ProductDetailComponent },
  // { path: '', component: ProductTableComponent },
  { path: 'store', component: StoreRootComponent },
  { path: '', redirectTo: '/store', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
