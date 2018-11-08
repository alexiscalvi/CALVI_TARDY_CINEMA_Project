import { Pipe, PipeTransform } from '@angular/core';
import {Film} from '../models/film';

@Pipe({
  name: 'filterFilm'
})
export class FilterFilmPipe implements PipeTransform {

  transform(filmList: Film[], currentValue: String): any {
    if (currentValue) {
      return filmList.filter(function (film: Film) {
        return film.title.toLowerCase().includes(currentValue.toLowerCase()) ||
        film.description.toLowerCase().includes(currentValue.toLowerCase());
      });
    }
    return filmList;
  }

}
