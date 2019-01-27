import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Actor} from "../../models/actor";
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
  actorsAlreadyChecked: Actor[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, public actorProvider: ActorProvider) {
    this.items = [];
    this.actors = <Array<Actor>> new Array();
    this.actorsAlreadyChecked = [];
    this.actorsAlreadyChecked = this.navParams.get('actors');
    this.actorProvider.getActors().subscribe( value => {
      this.items = value;
      this.actorsAlreadyChecked.forEach(actor => {
        this.items = this.items.filter(item => item.actorId!==actor.actorId);
      });
    });

  }

  ionViewDidLoad() {
  }


  public closeModal(){
    this.viewController.dismiss();
  }

  public closeAndAcceptModal() {
    this.viewController.dismiss(this.actors);
  }

  public addThisActor(actor: Actor) {
    if (this.actors.includes(actor)) {
      this.actors = this.actors.filter(actorOfActors => actorOfActors!== actor);
    } else {
      this.actors.push(actor);
    }
  }
}
