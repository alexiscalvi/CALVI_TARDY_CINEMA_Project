import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ComplexFilm} from "../../models/complex-film";
import {AddFilmPage} from "../add-film/add-film";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
}
