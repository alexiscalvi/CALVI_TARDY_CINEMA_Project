import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actor} from '../models/actor';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Film} from '../models/film';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) {}

  getActors(): Observable<Actor[]> {
    const url = environment.api + 'Actor/getActeurs';
    return this.http.get(url).pipe(map(actors => actors as Actor[]));
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
