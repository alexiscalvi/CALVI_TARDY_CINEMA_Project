import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import {ComplexFilm} from "../../models/complex-film";

/*
  Generated class for the FilmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilmProvider {

  filmsList: ComplexFilm[] = [];

  constructor(public http: HttpClient) {
  }
  /**
   * getTrips
   */
  public getComplexFilms(): Observable<ComplexFilm[]> {
    const url = 'http://192.168.1.19:8080/' + 'Film/getComplexFilms';
    return this.http.get(url).pipe(map(films => films as ComplexFilm[]));

  }


}
