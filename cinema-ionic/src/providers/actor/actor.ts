import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Actor} from "../../models/actor";
import {map} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";

/*
  Generated class for the ActorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ActorProvider {

  actorsList: Actor[] = [];

  constructor(public http: HttpClient) {
    this.actorsList.push(new Actor(1,"Martial","Tardy",""));
    this.actorsList.push(new Actor(2,"Colin","Tardy",""));
    this.actorsList.push(new Actor(3,"Vivien","Tardy",""));
    this.actorsList.push(new Actor(4,"Test","Tardy",""));

  }

  /**
   * getTrips
   */
  public getActors(): Observable<Actor[]> {
    const url = environment.api + 'Actor/getActors';
    return this.http.get(url).pipe(map(actors => actors as Actor[]));

  }


  public addActor(actor: Actor) {
    const url = environment.api + '/Actor/addActor';
    return this.http.post(url, actor);
  }

  public removeActor(actor: Actor) {
    const url = environment.api + '/Actor/removeActor';
    return this.http.post(url, actor);
  }
}
