import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actor} from '../models/actor';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Film} from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(public http: HttpClient) { }

  getFilms(): Observable<Film[]> {
    const url = environment.api + 'Film/getFilms';
    // this.http.get(url)
    //   .pipe(
    //     map(res => res) // or any other operator
    //   )
    //   .subscribe(res => console.log(res));
    return this.http.get(url).pipe(map(films => films as Film[]));
  }

  getFilm(id: number): Film {

    const url = environment.api + 'Film/getFilm/' + id;
    // this.http.get(url)
    //   .pipe(
    //     map(res => res) // or any other operator
    //   )
    //   .subscribe(res => console.log(res));
    let film: Film;
    this.http.get(url).subscribe(id2 => {
      film = id2 as Film;
      console.log(id2 as Film);
    });
    console.log(film);
    return film;
  }
}