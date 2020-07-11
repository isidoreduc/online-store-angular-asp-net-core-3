import { Component, OnInit } from '@angular/core';
import { Repository } from '../models/repository';
import { Product } from '../models/product.model';

@Component({
  selector: 'product-detail',
  templateUrl: 'productDetail.component.html',
})
export class ProductDetailComponent implements OnInit {
  constructor(private repo: Repository) {}

  ngOnInit() {}

  get product(): Product {
    return this.repo.product;
  }
}
