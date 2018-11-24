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


  @Output() categoryChange: EventEmitter<number> =   new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  returnCategory(id: number) {
    this.categoryChange.emit(id);
  }

}
