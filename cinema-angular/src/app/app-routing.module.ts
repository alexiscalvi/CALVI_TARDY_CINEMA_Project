import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ActorsComponent} from './actors/actors.component';
import {FilmComponent} from './film/film.component';

const routes: Routes = [
  {path: 'actors', component: ActorsComponent},
  {path: 'films', component: FilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
