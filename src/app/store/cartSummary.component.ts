import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'store-cartSummary',
  templateUrl: 'cartSummary.component.html',
})
export class CartSummaryComponent implements OnInit {
  constructor(private cart: Cart) {}

  get itemCount(): number {
    return this.cart.itemCount;
  }
  get totalPrice(): number {
    return this.cart.totalPrice;
  }

  ngOnInit() {}
}
