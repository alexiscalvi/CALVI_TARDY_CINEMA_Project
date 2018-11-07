import { Component, OnInit } from '@angular/core';
import {FilmService} from '../services/film.service';
import {Film} from '../models/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  private films: Film[];

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.getFilms().subscribe( value => {
      this.films = value;
    });
  }

}
