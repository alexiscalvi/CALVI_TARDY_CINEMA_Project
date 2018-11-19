import { Pipe, PipeTransform } from '@angular/core';
import {Film} from '../models/film';
import {ComplexFilm} from '../models/complex-film';

@Pipe({
  name: 'filterFilm'
})
export class FilterFilmPipe implements PipeTransform {

  transform(filmList: ComplexFilm[], currentValue: String): any {
    if (currentValue) {
      return filmList.filter(function (film: ComplexFilm) {
        return film.filmEntity.title.toLowerCase().includes(currentValue.toLowerCase()) ||
        film.filmEntity.description.toLowerCase().includes(currentValue.toLowerCase());
      });
    }
    return filmList;
  }

}
