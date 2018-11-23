import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Category} from '../models/category';
import {map} from 'rxjs/internal/operators';
import {Language} from '../models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(public http: HttpClient) { }

  getLanguages(): Observable<Language[]> {
    const url = environment.api + 'Language/getLanguages';
    // this.http.get(url)
    //   .pipe(
    //     map(res => res) // or any other operator
    //   )
    //   .subscribe(res => console.log(res));
    return this.http.get(url).pipe(map(languages => languages as Language[]));
  }
}
