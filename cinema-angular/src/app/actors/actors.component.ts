import { Component, OnInit } from '@angular/core';
import {Actor} from '../models/actor';
import {ActorService} from '../services/actor.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors: Actor[];
  actors_all: Actor[];
  dataSearch = '';

  constructor(private actorServ: ActorService) {
  }

  ngOnInit() {
    this.actorServ.getActors().subscribe( value => {
      this.actors_all = value;
      this.actors = value;
    });
  }
}


