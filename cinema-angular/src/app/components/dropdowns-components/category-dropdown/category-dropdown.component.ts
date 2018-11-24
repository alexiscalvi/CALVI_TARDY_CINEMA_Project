import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../../models/category';

@Component({
  selector: 'app-category-dropdown',
  templateUrl: './category-dropdown.component.html',
  styleUrls: ['./category-dropdown.component.css']
})
export class CategoryDropdownComponent implements OnInit {

  @Input()
  categories: Category[];


  @Output() categoryChange: EventEmitter<Category> =   new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  returnCategory(category: Category) {
    this.categoryChange.emit(category);
  }

}
