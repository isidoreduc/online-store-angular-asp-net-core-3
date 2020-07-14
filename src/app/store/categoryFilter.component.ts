import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../models/navigation.service';

@Component({
  selector: 'store-categoryFilter',
  templateUrl: 'categoryFilter.component.html',
})
export class CategoryFilterComponent implements OnInit {
  constructor(public service: NavigationService) {}

  ngOnInit() {}
}
