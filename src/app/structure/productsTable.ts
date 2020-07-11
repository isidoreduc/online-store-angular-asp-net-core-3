import { Component, OnInit } from '@angular/core';
import { Repository } from '../models/repository';
import { Product } from '../models/product.model';

@Component({
  selector: 'product-table',
  templateUrl: './productsTable.component.html',
})
export class ProductTableComponent {
  constructor(private repo: Repository) {}

  get products(): Product[] {
    return this.repo.products;
  }
}
