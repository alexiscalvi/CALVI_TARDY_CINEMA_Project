import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../../services/film.service';
import {Film} from '../../../models/film';
import {Category} from '../../../models/category';
import {CategoryService} from '../../../services/category.service';
import {forEach} from '@angular/router/src/utils/collection';
import {ComplexFilm} from '../../../models/complex-film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  private films: Film[];
  private complexFilms: ComplexFilm[];
  private filmSearched: string;
  private categories: Category[];

  constructor(private filmService: FilmService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.filmSearched = '';
    this.filmService.getFilms().subscribe( value => {
      this.films = value;
    });
    this.filmService.getComplexFilms().subscribe( value => {
      this.complexFilms = value;
    });
    this.categoryService.getCategories().subscribe(value => {
      this.categories = value;
    });


  }

}
