import { Pipe, PipeTransform } from '@angular/core';
import {ComplexFilm} from "../../models/complex-film";

/**
 * Generated class for the FilmNameFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filmNameFilter',
})
export class FilmNameFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(filmList: ComplexFilm[], currentValue: String): any {
    if (currentValue) {
      return filmList.filter(function (film: ComplexFilm) {
        return (film.filmEntity.title.toLowerCase().includes(currentValue.toLowerCase()) ||
          film.filmEntity.description.toLowerCase().includes(currentValue.toLowerCase()));
      });
    }
    return filmList;
  }
}
