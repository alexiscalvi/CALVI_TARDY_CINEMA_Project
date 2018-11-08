import { Component, OnInit } from '@angular/core';
import {Actor} from '../../../models/actor';
import {ActorService} from '../../../services/actor.service';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.css']
})
export class ActorFormComponent implements OnInit {

  private actor: Actor;
  private firstName: string;
  private lastName: string;
  private lastUpdate: string;


  constructor(private actorService: ActorService) { }

  ngOnInit() {
    this.actor = new Actor('', '', '');
  }

  valider(): void {

    this.actorService.adActor(this.actor). subscribe(
      () => {

      },
      (error) => { console.log(error.messages); }
    );

  }

}
