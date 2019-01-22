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
import {ActivatedRoute, Router} from '@angular/router';
import {isEmpty} from 'rxjs/operators';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent implements OnInit {


  private film: ComplexFilm;
  private categories: Category[];
  private languages: Language[];
  private id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private filmService: FilmService,
              private categoryService: CategoryService,
              private languageService: LanguageService) { }

  ngOnInit() {

    this.route.paramMap.subscribe((id2) => this.id = +id2.get('id'));
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

    if (this.id) {
      this.filmService.getComplexFilm(this.id).subscribe((value) => {
        this.film = value;
        console.log(this.film);
      });
    }
  }


  valider(form): boolean {
    if (!form.valid
      || !this.film.filmEntity.languageId
      || !this.film.filmEntity.originalLanguageId
      || this.film.actorEntityList.length === 0
      || this.film.categoryEntityList.length === 0) {
      return false;
    }
    if (!this.id) {
      console.log('save');
      this.filmService.addComplexFilm(this.film).subscribe(
        () => {

        },
        (error) => {
          console.log(error.messages);
          return false;
        },
        () => {
          window.location.href = 'films';
        }
      );
    } else {
      console.log('update');
      console.log(this.film);
      this.filmService.updateComplexFilm(this.film).subscribe(
        () => {

        },
        (error) => {
          console.log(error.messages);
          return false;
        },
        () => {
          window.location.href = 'film/' + this.film.filmEntity.filmId;
        }
      );
    }
    return true;

  }

  categoryChangeHandler(category: Category) {
    if (category !== null && !this.film.categoryEntityList.includes(category)) {
      this.film.categoryEntityList.push(category);
      console.log(this.film.categoryEntityList);
    }
  }

  rmCat(category: Category) {
    const updatedArray = [];
    for (const el of this.film.categoryEntityList) {
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
    const updatedArray = [];
    for (const el of this.film.actorEntityList) {
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
