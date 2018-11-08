import {Component, Input, OnInit} from '@angular/core';
import {DropdownItem} from '../../models/dropdown-item';
import {Category} from '../../models/category';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input()
  categories: Category[];

  constructor() { }

  ngOnInit() {
  }

}
