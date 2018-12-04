import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Actor} from "../../models/actor";
import {map} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";
import {Category} from "../../models/category";

/*
  Generated class for the CategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CategoryProvider Provider');
  }

  public getCategories(): Observable<Category[]> {
    const url = environment.api + 'Category/getCategories';
    return this.http.get(url).pipe(map(categories => categories as Category[]));

  }

}
