import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterActor'
})
export class FilterActorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
