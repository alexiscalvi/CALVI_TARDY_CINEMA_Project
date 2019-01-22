import { Component, OnInit } from '@angular/core';
import {Actor} from '../../../models/actor';
import {ActorService} from '../../../services/actor.service';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

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

  valider(form): boolean {
    if (!form.valid) {
      return false;
    }
    this.actorService.addActor(this.actor).subscribe(
      () => {

      },
      (error) => {
        console.log(error.messages);
        return false;
      },
      () => {
        window.location.href = 'actors';
      }
    );
    return true;
  }

}
