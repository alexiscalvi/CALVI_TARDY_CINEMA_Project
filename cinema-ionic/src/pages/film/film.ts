import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ComplexFilm} from "../../models/complex-film";
import {AddFilmPage} from "../add-film/add-film";
import {FilmProvider} from "../../providers/film/film";
import {FilmsPage} from "../films/films";

/**
 * Generated class for the FilmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-film',
  templateUrl: 'film.html',
})
export class FilmPage {

  film: ComplexFilm;

  constructor(public navCtrl: NavController, public navParams: NavParams, public filmProvider: FilmProvider) {
    this.film = this.navParams.get('film');
    console.log("après");
    console.log(this.film);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmPage');
  }

  public updateFilm(){
    let copy = JSON.parse(JSON.stringify(this.film));
    this.navCtrl.push(AddFilmPage, {film: copy});
  }

  public removeFilm(filmId: number) {
    this.filmProvider.removeComplexFilm(filmId).subscribe(() => {
        this.navCtrl.push(FilmsPage);
      },
      (error) => {
        this.navCtrl.push(FilmsPage);
      },
      () => {
        this.navCtrl.push(FilmsPage);
      }
    );
  }
}
