import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Film} from '../models/film';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Category} from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    const url = environment.api + 'Category/getCategories';
    return this.http.get(url).pipe(map(categories => categories as Category[]));
  }
}
