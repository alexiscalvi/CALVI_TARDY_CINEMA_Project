import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Actor} from "../../models/actor";
import {ActorProvider} from "../../providers/actor/actor";
import {FilmPage} from "../film/film";
import {FilmsPage} from "../films/films";
import {ActorsPage} from "../actors/actors";

/**
 * Generated class for the AddActorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-actor',
  templateUrl: 'add-actor.html',
})
export class AddActorPage {
  private actor: Actor;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actorProvider: ActorProvider) {
    this.actor = new Actor('', '', '');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddActorPage');
  }

  valider(): void {

    this.actorProvider.addActor(this.actor). subscribe(
      () => {

      },
      (error) => { console.log(error.messages); },
      () => {
        this.navCtrl.push(ActorsPage);
      }
    );

  }

}
