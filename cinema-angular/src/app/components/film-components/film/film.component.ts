import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../../models/film';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {FilmService} from '../../../services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  private film: Film;
  private id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private  filmService: FilmService) {
    this.id = 0;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((id2) => this.id = +id2.get('id'));
    // console.log(this.id);
    this.film = this.filmService.getFilm(this.id);
  }

}
