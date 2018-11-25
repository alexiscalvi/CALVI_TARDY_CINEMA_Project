import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActorsPage } from './actors';

@NgModule({
  declarations: [
    ActorsPage,
  ],
  imports: [
    IonicPageModule.forChild(ActorsPage),
  ],
})
export class ActorsPageModule {}
