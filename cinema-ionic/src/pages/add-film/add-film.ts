import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {AddCategoryPage} from "../add-category/add-category";
import {Category} from "../../models/category";
import {Film} from "../../models/film";
import {ComplexFilm} from "../../models/complex-film";
import {Actor} from "../../models/actor";
import {AddActorPage} from "../add-actor/add-actor";
import {FilmProvider} from "../../providers/film/film";
import {Language} from "../../models/language";
import {LanguageProvider} from "../../providers/language/language";
import {FilmPage} from "../film/film";

/**
 * Generated class for the AddFilmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-film',
  templateUrl: 'add-film.html',
})
export class AddFilmPage {

  film: ComplexFilm;
  filmtempon: ComplexFilm;
  languages: Language[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController, public filmProvider: FilmProvider, public languageProvider: LanguageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFilmPage');
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter AddFilmPage');
    this.languageProvider.getLanguages().subscribe( value => {
      this.languages = value;
    });
    this.film = new ComplexFilm(
      new Film(
        null,
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''), <Array<Actor>> new Array(), <Array<Category>> new Array());

    let film2 = this.navParams.get('film');
    console.log("coucou:");
    console.log(film2);
    if (film2) {
      this.film = film2;
    }
    this.filmtempon = this.film;
  }



  public addCategory() {
    let modal = this.modalController.create(AddCategoryPage);
    modal.onDidDismiss(data => {
      if (data) {
        for (let category of data) {
          if (!this.film.categoryEntityList.includes(category)) {
            this.film.categoryEntityList.push(category);
            // console.log(this.film.categoryEntityList);
          }
        }
      }
    });
    modal.present();
  }

  public addActor() {
    let modal = this.modalController.create(AddActorPage);
    modal.onDidDismiss(data => {
      if (data) {
        for (let actor of data) {
          if (!this.film.actorEntityList.includes(actor)) {
            this.film.actorEntityList.push(actor);
            // console.log(this.film.actorEntityList);
          }
        }
      }
    });
    modal.present();
  }

  public valider() {

    //[TODO: if id update movie not create
    this.languages.map(value => {
      if (value.languageId == this.film.filmEntity.languageId) {
        this.film.languageNormal = value;
      }
    });
    this.languages.map(value => {
      if (value.languageId == this.film.filmEntity.originalLanguageId) {
        this.film.languageVO = value;
      }
    });

    if (!this.film.filmEntity.filmId) {
console.log(this.film);
      console.log('save');
      this.filmProvider.addComplexFilm(this.film).subscribe(
        () => {

        },
        (error) => {
          console.log(error.messages);
        },
        () => {
          this.navCtrl.push(FilmPage, {
            film: this.film
          });
        }
      );
    } else {
    //   console.log('update');
    //   console.log(this.film);
      this.filmProvider.updateComplexFilm(this.film).subscribe(
        () => {

        },
        (error) => {
          console.log(error.messages);
        },
        () => {
          this.navCtrl.push(FilmPage, {
          film: this.film
        });
        }
      );
    }
  }
}
