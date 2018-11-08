import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorComponent } from './components/actor-components/actor/actor.component';
import { FilmComponent } from './components/film-components/film/film.component';
import { ActorsComponent } from './components/actor-components/actors/actors.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmsComponent } from './components/film-components/films/films.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActorFormComponent } from './components/actor-components/actor-form/actor-form.component';
import { FilmCardComponent } from './components/film-components/film-card/film-card.component';
import { FormsModule } from '@angular/forms';
import { FilterFilmPipe } from './pipes/filter-film.pipe';
import { FilterActorPipe } from './pipes/filter-actor.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    FilmComponent,
    ActorsComponent,
    FilmsComponent,
    NavbarComponent,
    ActorFormComponent,
    FilmCardComponent,
    FilterFilmPipe,
    FilterActorPipe,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
