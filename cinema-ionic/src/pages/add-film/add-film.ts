import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFilmPage');
  }

}
