import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorsComponent } from './components/actor-components/actors/actors.component';
import { ActorFormComponent } from './components/actor-components/actor-form/actor-form.component';
import {FilmsComponent} from './components/film-components/films/films.component';
import {FilmComponent} from './components/film-components/film/film.component';

const routes: Routes = [
  {path: 'actors', component: ActorsComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'addActor', component: ActorFormComponent },
  {path: 'film/:id', component: FilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
