import { Component, OnInit } from '@angular/core';
import {Film} from '../models/film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {


  private films: Film[];

  constructor() { }

  ngOnInit() {
  }

}
