import { Component, OnInit } from '@angular/core';
import {Category} from '../../../models/category';
import {Language} from '../../../models/language';
import {CategoryService} from '../../../services/category.service';
import {LanguageService} from '../../../services/language.service';
import {ComplexFilm} from '../../../models/complex-film';
import {Film} from '../../../models/film';
import {FilmService} from '../../../services/film.service';
import {Actor} from '../../../models/actor';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent implements OnInit {


  private film: ComplexFilm;
  private categories: Category[];
  private languages: Language[];

  constructor(private filmService: FilmService, private categoryService: CategoryService, private languageService: LanguageService) { }

  ngOnInit() {
    this.film = new ComplexFilm(
      new Film(
        null,
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''), <Array<Actor>> new Array(), <Array<Category>> new Array());
    this.categoryService.getCategories().subscribe(value => {
      this.categories = value;
    });
    this.languageService.getLanguages().subscribe(value => {
      this.languages = value;
    });

  }


  valider(): void {

    console.log(this.film);
    // this.filmService.addComplexFilm(this.film). subscribe(
    //   () => {
    //
    //   },
    //   (error) => { console.log(error.messages); },
    //   () => {
    //     window.location.href = 'films';
    //   }
    // );

  }

  categoryChangeHandler(count: number) {
    if (count === 0) {
      console.log('erreur');
    } else {
      this.film.categoryEntityList.push(new Category(count, '', ''));
      console.log(this.film.categoryEntityList);
    }
  }

  rmCat(category: Category) {
    let updatedArray = [];
    for (let el of this.film.categoryEntityList) {
      if (el !== category) {
        updatedArray.push(el);
      }
    }
    this.film.categoryEntityList = updatedArray;
  }
}
