import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateActorPage } from './create-actor';

@NgModule({
  declarations: [
    CreateActorPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateActorPage),
  ],
})
export class CreateActorPageModule {}
