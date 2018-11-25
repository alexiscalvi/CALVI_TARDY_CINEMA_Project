import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FilmsPage } from '../pages/films/films';
import { ActorsPage } from '../pages/actors/actors';
import { AddActorPage } from '../pages/add-actor/add-actor';
import { AddFilmPage } from '../pages/add-film/add-film';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ActorProvider } from '../providers/actor/actor';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FilmsPage,
    ActorsPage,
    AddFilmPage,
    AddActorPage
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
    ListPage,
    FilmsPage,
    ActorsPage,
    AddActorPage,
    AddFilmPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ActorProvider,
  ]
})
export class AppModule {}
