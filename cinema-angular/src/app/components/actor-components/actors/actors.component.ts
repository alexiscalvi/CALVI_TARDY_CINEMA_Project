import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actor} from '../../../models/actor';
import {ActorService} from '../../../services/actor.service';
import {Category} from '../../../models/category';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  private actors: Actor[];
  private actorSearched: String;

  @Output() actorChange: EventEmitter<Actor> =   new EventEmitter();

  constructor(private actorServ: ActorService) {
  }

  ngOnInit() {
    this.actorSearched = '';
    this.actorServ.getActors().subscribe( value => {
      this.actors = value;
    });
  }

  // On appelle le service pour enregistrer le visiteur


  returnActor(actor: Actor) {
    this.actorChange.emit(actor);
  }
}


