import { Component, OnInit } from '@angular/core';
import { Repository } from '../models/repository';

@Component({
      selector: 'store-categoryFilter',
      templateUrl: 'categoryFilter.component.html'
})

export class CategoryFilterComponent implements OnInit {
      constructor(private repo:Repository) { }

      ngOnInit() { }
}