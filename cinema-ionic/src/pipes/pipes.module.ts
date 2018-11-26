import { NgModule } from '@angular/core';
import { FilmNameFilterPipe } from './film-name-filter/film-name-filter';
import { ActorNameFilterPipe } from './actor-name-filter/actor-name-filter';
@NgModule({
	declarations: [FilmNameFilterPipe,
    ActorNameFilterPipe],
	imports: [FilmNameFilterPipe,
    ActorNameFilterPipe,],
	exports: [FilmNameFilterPipe,
    ActorNameFilterPipe]
})
export class PipesModule {}
