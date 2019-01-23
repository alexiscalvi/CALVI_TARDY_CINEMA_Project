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
import { CategoryDropdownComponent } from './components/dropdowns-components/category-dropdown/category-dropdown.component';
import { CategoryComponent } from './components/category-components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { FilmFormComponent } from './components/film-components/film-form/film-form.component';
import { LanguageDropdownComponent } from './components/dropdowns-components/language-dropdown/language-dropdown.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule
} from '@angular/material';

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
    CategoryDropdownComponent,
    CategoryComponent,
    HomeComponent,
    FilmFormComponent,
    LanguageDropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
