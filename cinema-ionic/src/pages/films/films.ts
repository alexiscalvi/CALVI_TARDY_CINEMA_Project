import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {ComplexFilm} from "../../models/complex-film";
import {FilmProvider} from "../../providers/film/film";
import {FilmPage} from "../film/film";
import {AddFilmPage} from "../add-film/add-film";

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
  resourcesLoaded: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public filmProvider: FilmProvider, public modalController: ModalController) {
    this.filmSearched = '';
    this.films = [];
    this.resourcesLoaded = false;
    this.filmProvider.getComplexFilms().subscribe( value => {
      this.resourcesLoaded = true;
      this.films = value;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsPage');
  }

  goToDetail(film: ComplexFilm){
    this.navCtrl.push(FilmPage,{ film: film });
  }


  addFilm(){
    let modal = this.modalController.create(AddFilmPage);
    modal.present();
  }
}
