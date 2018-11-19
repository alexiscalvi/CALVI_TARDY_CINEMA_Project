import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../models/category';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input()
  categories: Category[];


  @Output() countChanged: EventEmitter<number> =   new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  returnCategory(id: number) {
    this.countChanged.emit(id);
  }

}
