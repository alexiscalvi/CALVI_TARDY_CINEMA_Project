import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ComplexFilm} from "../../models/complex-film";
import {FilmProvider} from "../../providers/film/film";
import {FilmPage} from "../film/film";

/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {

  films: ComplexFilm[];
  filmSearched: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public filmProvider: FilmProvider) {
    this.filmSearched = '';
    this.films = [];
    this.filmProvider.getComplexFilms().subscribe( value => {
      this.films = value;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsPage');
  }

  goToDetail(film: ComplexFilm){
    this.navCtrl.push(FilmPage,{ film: film });
  }
}
