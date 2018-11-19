import {Actor} from './actor';
import {Category} from './category';
import {Film} from './film';

export class ComplexFilm {
  constructor(
    public _filmEntity?: Film,
    public _actorEntityList?: Actor[],
    public _categoryEntityList?: Category[]
  ) {
  }

  get filmEntity(): Film {
    return this._filmEntity;
  }

  set filmEntity(value: Film) {
    this._filmEntity = value;
  }

  get actorEntityList(): Actor[] {
    return this._actorEntityList;
  }

  set actorEntityList(value: Actor[]) {
    this._actorEntityList = value;
  }

  get categoryEntityList(): Category[] {
    return this._categoryEntityList;
  }

  set categoryEntityList(value: Category[]) {
    this._categoryEntityList = value;
  }
}
