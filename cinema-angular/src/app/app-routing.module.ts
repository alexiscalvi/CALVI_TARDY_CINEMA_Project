import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorsComponent } from './components/actor-components/actors/actors.component';
import { ActorFormComponent } from './components/actor-components/actor-form/actor-form.component';
import {FilmsComponent} from './components/film-components/films/films.component';
import {FilmComponent} from './components/film-components/film/film.component';
import {HomeComponent} from './components/home/home.component';
import {FilmFormComponent} from './components/film-components/film-form/film-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'actors', component: ActorsComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'addActor', component: ActorFormComponent },
  {path: 'addFilm', component: FilmFormComponent },
  {path: 'film/:id', component: FilmComponent},
  {path: 'addFilm/:id', component: FilmFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
