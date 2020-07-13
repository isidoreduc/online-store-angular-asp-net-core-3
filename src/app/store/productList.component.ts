import { Component, OnInit } from '@angular/core';
import { Repository } from '../models/repository';

@Component({
  selector: 'store-product-list',
  templateUrl: 'productList.component.html',
})
export class ProductListComponent implements OnInit {
  constructor(private repo: Repository) {}

  get products() {
    return this.repo.products;
  }

  ngOnInit() {}
}
