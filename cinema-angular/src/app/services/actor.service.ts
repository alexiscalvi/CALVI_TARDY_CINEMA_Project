import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Actor} from '../models/actor';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Film} from '../models/film';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private httpHeaders: HttpHeaders;
  private options;
  constructor(public http: HttpClient) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin' : 'http://localhost'
    });
    this.options = {
      headers: this.httpHeaders
    };
  }

  getActors(): void {
  // getActors(): Observable<Actor[]> {
    const url = environment.api + 'Actor/getActors';
    // return this.http.get(url).pipe(map(actors => actors as Actor[]));
    this.http.get(url, this.options)
      .pipe(
        map(res => res) // or any other operator
      )
      .subscribe(res => console.log(res));
  }

  getActor(id: number): Observable<Actor> {
    const url = environment.api + 'acteur/' + id;
    return this.http.get<Actor>(url).pipe(map(actor => actor as Actor));
  }

  getActorFilms(id: number): Observable<Film[]> {
    const url = environment.api + 'films?acteur=' + id;
    return this.http.get<Film>(url).pipe(map(films => films as Film[]));
  }

  delete(id: number) {
    const url = environment.api + 'acteur/' + id;
    return this.http.delete(url);
  }

  postActor(actor: Actor): Observable<Actor> {
    const url = environment.api + 'acteur';
    return this.http.post(url, actor);
  }
}
