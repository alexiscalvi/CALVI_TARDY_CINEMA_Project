import {Component, Input, OnInit} from '@angular/core';
import {Actor} from '../../../models/actor';
import {ActorService} from '../../../services/actor.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  private actors: Actor[];
  private actorSearched: String;

  constructor(private actorServ: ActorService) {
  }

  ngOnInit() {
    this.actorSearched = '';
    this.actorServ.getActors().subscribe( value => {
      this.actors = value;
    });
  }

  // On appelle le service pour enregistrer le visiteur


}

