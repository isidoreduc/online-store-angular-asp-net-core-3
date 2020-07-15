import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart.model';

@Component({
  // has no selector, not needed as the component has its own nav route
  templateUrl: 'cartDetail.component.html',
})
export class CartDetailComponent implements OnInit {
  constructor(public cart: Cart) {}

  ngOnInit() {}
}
