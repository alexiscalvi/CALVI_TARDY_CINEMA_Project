import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ComplexFilm} from "../../models/complex-film";
import {map} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";
import {Language} from "../../models/language";

/*
  Generated class for the LanguageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LanguageProvider {

  constructor(public http: HttpClient) {
  }

  public getLanguages(): Observable<Language[]> {
    const url = environment.api + 'Language/getLanguages';
    return this.http.get(url).pipe(map(languages => languages as Language[]));

  }

}
