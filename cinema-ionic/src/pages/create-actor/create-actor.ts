import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Actor} from "../../models/actor";
import {FilmPage} from "../film/film";
import {ActorProvider} from "../../providers/actor/actor";
import {ActorsPage} from "../actors/actors";

/**
 * Generated class for the CreateActorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-actor',
  templateUrl: 'create-actor.html',
})
export class CreateActorPage {

  actor: Actor;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actorProvider: ActorProvider) {
    this.actor = new Actor(null,'','');
  }

  ionViewDidLoad() {
  }

  public valider(form) : boolean {
    if (!form.valid) {
      return false;
    }
    this.actorProvider.addActor(this.actor).subscribe(
      () => {
        return true;
      },
      (error) => {
        console.log(error.messages);
        return false;
      },
      () => {
        this.navCtrl.push(ActorsPage);
        return true;
      });
    return true;
  }

}
