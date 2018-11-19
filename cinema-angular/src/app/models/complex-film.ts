import {Actor} from './actor';
import {Category} from './category';
import {Film} from './film';

export class ComplexFilm {
  constructor(
    public _filmEntity?: Film,
    public _actorsEntityList?: Actor[],
    public _categoryEntityList?: Category[]
  ) {
  }

  get filmEntity(): Film {
    return this._filmEntity;
  }

  set filmEntity(value: Film) {
    this._filmEntity = value;
  }

  get actorsEntityList(): Actor[] {
    return this._actorsEntityList;
  }

  set actorsEntityList(value: Actor[]) {
    this._actorsEntityList = value;
  }

  get categoryEntityList(): Category[] {
    return this._categoryEntityList;
  }

  set categoryEntityList(value: Category[]) {
    this._categoryEntityList = value;
  }
}
