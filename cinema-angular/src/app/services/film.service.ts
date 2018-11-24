import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actor} from '../models/actor';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Film} from '../models/film';
import {ComplexFilm} from '../models/complex-film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private type: String;

  constructor(public http: HttpClient) {
    this.type = 'Film/';
  }

  getFilms(): Observable<Film[]> {
    const url = environment.api + this. type + 'getFilms';
    // this.http.get(url)
    //   .pipe(
    //     map(res => res) // or any other operator
    //   )
    //   .subscribe(res => console.log(res));
    return this.http.get(url).pipe(map(films => films as Film[]));
  }

  getComplexFilms(): Observable<ComplexFilm[]> {
    const url = environment.api + this. type + 'getComplexFilms';
    // this.http.get(url)
    //   .pipe(
    //     map(res => res) // or any other operator
    //   )
    //   .subscribe(res => console.log(res));
    return this.http.get(url).pipe(map(films => films as ComplexFilm[]));
  }

  // getFilm(id: number): Film {
  //
  //   const url = environment.api + this. type + 'getFilm/' + id;
  //   // this.http.get(url)
  //   //   .pipe(
  //   //     map(res => res) // or any other operator
  //   //   )
  //   //   .subscribe(res => console.log(res));
  //   let film: Film;
  //   this.http.get(url).subscribe(id2 => {
  //     film = id2 as Film;
  //     // console.log(id2 as Film);
  //   });
  //   // console.log(film);
  //   return film;
  // }

  getComplexFilmsByCategoryId(id: number): Observable<ComplexFilm[]> {
    const url = environment.api + this. type + 'getComplexFilmsByCategory/' + id;
    // this.http.get(url)
    //   .pipe(
    //     map(res => res) // or any other operator
    //   )
    //   .subscribe(res => console.log(res));
    return this.http.get(url).pipe(map(films => films as ComplexFilm[]));
  }

  getComplexFilm(id: number): Observable<ComplexFilm> {
    const url = environment.api + this. type + 'getComplexFilm/' + id;
    // this.http.get(url)
    //   .pipe(
    //     map(res => res) // or any other operator
    //   )
    //   .subscribe(res => console.log(res));
    // let film: ComplexFilm;
    return this.http.get(url).pipe(map(film => film as ComplexFilm));
  }

  addComplexFilm(film: ComplexFilm) {
    const url = environment.api + this. type + 'addComplexFilm';
    return this.http.post(url, film);
  }
}
