import { Component, OnInit } from '@angular/core';
import {Category} from '../../../models/category';
import {Language} from '../../../models/language';
import {CategoryService} from '../../../services/category.service';
import {LanguageService} from '../../../services/language.service';
import {ComplexFilm} from '../../../models/complex-film';
import {Film} from '../../../models/film';
import {FilmService} from '../../../services/film.service';
import {Actor} from '../../../models/actor';
import {MatIconModule} from '@angular/material/icon';

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
    this.languages = <Array<Language>> new Array();
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

    this.filmService.addComplexFilm(this.film). subscribe(
      () => {

      },
      (error) => { console.log(error.messages); },
      () => {
        // window.location.href = 'films';
      }
    );

  }

  categoryChangeHandler(category: Category) {
    if (category !== null && !this.film.categoryEntityList.includes(category)) {
      this.film.categoryEntityList.push(category);
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

  actorChangeHandler(actor: Actor) {
    if (actor !== null && !this.film.actorEntityList.includes(actor)) {
      this.film.actorEntityList.push(actor);
      console.log(this.film.actorEntityList);
    }
  }

  rmAct(actor: Actor) {
    let updatedArray = [];
    for (let el of this.film.actorEntityList) {
      if (el !== actor) {
        updatedArray.push(el);
      }
    }
    this.film.actorEntityList = updatedArray;
  }

  languageChangeHandler(language: Language) {
    console.log(language);
    if (language !== null) {
      this.film.filmEntity.languageId = language.languageId;
      console.log(this.film.filmEntity.languageId);
    }
  }

  rmLanguage() {
    this.film.filmEntity.languageId = null;
  }

  originalLanguageChangeHandler(language: Language) {
    if (language !== null) {
      this.film.filmEntity.originalLanguageId = language.languageId;
      console.log(this.film.filmEntity.originalLanguageId);
    }
  }

  rmOriginalLanguage() {
    this.film.filmEntity.originalLanguageId = null;
  }
}
