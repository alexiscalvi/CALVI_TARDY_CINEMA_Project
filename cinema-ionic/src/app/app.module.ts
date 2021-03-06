import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FilmsPage } from '../pages/films/films';
import { ActorsPage } from '../pages/actors/actors';
import { AddActorPage } from '../pages/add-actor/add-actor';
import { AddFilmPage } from '../pages/add-film/add-film';
import { FilmPage } from '../pages/film/film';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ActorProvider } from '../providers/actor/actor';
import { HttpClientModule} from "@angular/common/http";
import { FilmProvider } from '../providers/film/film';
import { CategoryProvider } from '../providers/category/category';
import { LanguageProvider } from '../providers/language/language';
import { FilmNameFilterPipe } from '../pipes/film-name-filter/film-name-filter';
import {ActorNameFilterPipe} from "../pipes/actor-name-filter/actor-name-filter";
import {AddCategoryPage} from "../pages/add-category/add-category";
import {CreateActorPage} from "../pages/create-actor/create-actor";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilmsPage,
    ActorsPage,
    AddFilmPage,
    AddActorPage,
    FilmNameFilterPipe,
    ActorNameFilterPipe,
    FilmPage,
    AddCategoryPage,
    CreateActorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FilmsPage,
    ActorsPage,
    AddActorPage,
    AddFilmPage,
    FilmPage,
    AddCategoryPage,
    CreateActorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ActorProvider,
    FilmProvider,
    CategoryProvider,
    LanguageProvider,
  ]
})
export class AppModule {}
