import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Category} from "../../models/category";
import {Actor} from "../../models/actor";
import {CategoryProvider} from "../../providers/category/category";
import {ActorProvider} from "../../providers/actor/actor";

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

  items: Actor[];
  actors: Actor[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, public actorProvider: ActorProvider) {
    this.items = [];
    this.actors = <Array<Actor>> new Array();
    this.actorProvider.getActors().subscribe( value => {
      // console.log(value);
      this.items = value;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddActorPage');
  }


  public closeModal(){
    this.viewController.dismiss();
  }

  public closeAndAcceptModal() {
    this.viewController.dismiss(this.actors);
  }

  public addThisActor(actor: Actor) {
    this.actors.push(actor);
  }
}
