import {Actor} from './actor';
import {Category} from './category';
import {Film} from './film';
import {Language} from './language';

export class ComplexFilm {
  constructor(
    private _filmEntity?: Film,
    private _actorEntityList?: Actor[],
    private _categoryEntityList?: Category[],
    private _languageNormal?: Language
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


  get languageNormal(): Language {
    return this._languageNormal;
  }

  set languageNormal(value: Language) {
    this._languageNormal = value;
  }

}
