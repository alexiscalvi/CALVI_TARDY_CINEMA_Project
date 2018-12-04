import {Actor} from './actor';
import {Category} from './category';
import {Film} from './film';
import {Language} from './language';

export class ComplexFilm {
  constructor(
    public filmEntity?: Film,
    public actorEntityList?: Actor[],
    public categoryEntityList?: Category[],
    public languageNormal?: Language,
    public languageVO?: Language
  ) {
  }


}
