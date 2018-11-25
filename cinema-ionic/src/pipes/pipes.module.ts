import { NgModule } from '@angular/core';
import { FilmNameFilterPipe } from './film-name-filter/film-name-filter';
@NgModule({
	declarations: [FilmNameFilterPipe],
	imports: [FilmNameFilterPipe],
	exports: [FilmNameFilterPipe]
})
export class PipesModule {}
