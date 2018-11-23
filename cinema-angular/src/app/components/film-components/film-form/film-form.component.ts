import { Component, OnInit } from '@angular/core';
import {Category} from '../../../models/category';
import {Language} from '../../../models/language';
import {CategoryService} from '../../../services/category.service';
import {LanguageService} from '../../../services/language.service';
import {ComplexFilm} from '../../../models/complex-film';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent implements OnInit {


  private film: ComplexFilm;
  private categories: Category[];
  private languages: Language[];

  constructor(private categoryService: CategoryService, private languageService: LanguageService) { }

  ngOnInit() {

    this.categoryService.getCategories().subscribe(value => {
      this.categories = value;
    });
    this.languageService.getLanguages().subscribe(value => {
      this.languages = value;
    });

  }

}
