import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../models/navigation.service';

@Component({
  selector: 'store-pagination',
  templateUrl: 'pagination.component.html',
})
export class PaginationComponent implements OnInit {
  constructor(public navigation: NavigationService) {}
  get pages(): number[] {
    if (this.navigation.productCount > 0) {
      return Array(
        Math.ceil(
          this.navigation.productCount / this.navigation.productsPerPage
        )
      )
        .fill(0)
        .map((x, i) => i + 1);
    } else {
      return [];
    }
  }

  ngOnInit() {}
}
