import { Pipe, PipeTransform } from '@angular/core';
import {Actor} from '../models/actor';

@Pipe({
  name: 'filterActor'
})
export class FilterActorPipe implements PipeTransform {

  transform(actorList: Actor[], currentValue: String): any {
    if (currentValue) {
      return actorList.filter(function (actor: Actor) {
        return actor.firstName.trimLeft().toLowerCase().trimLeft().includes(currentValue.trimLeft().toLowerCase()) ||
        actor.lastName.trimLeft().toLowerCase().trimLeft().includes(currentValue.trimLeft().toLowerCase());
      });
    }
    return actorList;
  }

}
