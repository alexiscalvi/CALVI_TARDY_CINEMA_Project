import { Pipe, PipeTransform } from '@angular/core';
import {Actor} from '../models/actor';

@Pipe({
  name: 'filterActor'
})
export class FilterActorPipe implements PipeTransform {

  transform(actorList: Actor[], currentValue: String): any {
    if (currentValue) {
      return actorList.filter(function (actor: Actor) {
        return actor.firstName.toLowerCase().includes(currentValue.toLowerCase()) ||
        actor.lastName.toLowerCase().includes(currentValue.toLowerCase());
      });
    }
    return actorList;
  }

}
