import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreRootComponent } from './store/storeRoot.component';

const routes: Routes = [
  { path: 'store/:category', component: StoreRootComponent },
  { path: 'store', component: StoreRootComponent },
  { path: '', redirectTo: '/store', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
