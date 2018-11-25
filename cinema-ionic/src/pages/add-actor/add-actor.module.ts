import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddActorPage } from './add-actor';

@NgModule({
  declarations: [
    AddActorPage,
  ],
  imports: [
    IonicPageModule.forChild(AddActorPage),
  ],
})
export class AddActorPageModule {}
