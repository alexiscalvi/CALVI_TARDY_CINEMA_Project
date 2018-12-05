import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FilmsPage} from "../films/films";
import {ActorsPage} from "../actors/actors";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToFilms() {
    this.navCtrl.push(FilmsPage);
  }

  goToActors() {
    this.navCtrl.push(ActorsPage);
  }
}
