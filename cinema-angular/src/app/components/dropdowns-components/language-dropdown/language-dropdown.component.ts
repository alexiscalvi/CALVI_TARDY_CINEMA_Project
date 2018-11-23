import {Component, Input, OnInit} from '@angular/core';
import {Language} from '../../../models/language';

@Component({
  selector: 'app-language-dropdown',
  templateUrl: './language-dropdown.component.html',
  styleUrls: ['./language-dropdown.component.css']
})
export class LanguageDropdownComponent implements OnInit {

  @Input()
  languageList: Language[];

  constructor() { }

  ngOnInit() {
  }

}
