import { Pipe, PipeTransform } from '@angular/core';
import {ComplexFilm} from "../../models/complex-film";
import {Actor} from "../../models/actor";

/**
 * Generated class for the ActorNameFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'actorNameFilter',
})
export class ActorNameFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(actorList: Actor[], currentValue: String): any {
    if (currentValue) {
      return actorList.filter(function (actor: Actor) {
        return (actor.firstName.toLowerCase().includes(currentValue.toLowerCase()) ||
          actor.lastName.toLowerCase().includes(currentValue.toLowerCase()));
      });
    }
    return actorList;
  }
}
