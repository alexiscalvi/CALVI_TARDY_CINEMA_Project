import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorComponent } from './actor/actor.component';
import { FilmComponent } from './film/film.component';
import { ActorsComponent } from './actors/actors.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmsComponent } from './films/films.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActorFormComponent } from './actor-form/actor-form.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    FilmComponent,
    ActorsComponent,
    FilmsComponent,
    NavbarComponent,
    ActorFormComponent,
    FilmCardComponent
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
