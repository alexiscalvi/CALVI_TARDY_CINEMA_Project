import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Actor} from "../../models/Actor";
import {ActorProvider} from "../../providers/actor/actor";

/**
 * Generated class for the ActorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actors',
  templateUrl: 'actors.html',
})
export class ActorsPage {

  items: Actor[];

  constructor(public navCtrl: NavController, public actorProvider: ActorProvider, public navParams: NavParams) {

    this.items = [];
    this.actorProvider.getActors().subscribe( value => {
      console.log(value);
      this.items = value;
    });
    // for (let i = 1; i < 11; i++) {
      // this.items.push({
      //   actorId: 'Item ' + i,
      //   note: 'This is item #' + i
      // });
    // }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActorsPage');
  }

}
