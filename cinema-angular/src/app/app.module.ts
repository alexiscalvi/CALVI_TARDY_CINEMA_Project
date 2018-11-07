import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorComponent } from './actor/actor.component';
import { FilmComponent } from './film/film.component';
import { ActorsComponent } from './actors/actors.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmsComponent } from './films/films.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    FilmComponent,
    ActorsComponent,
    FilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
