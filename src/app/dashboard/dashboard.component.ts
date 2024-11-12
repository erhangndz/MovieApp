import { Component } from '@angular/core';
import { Movie } from '../movie/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  movies: Movie[] = [];


  constructor(private movieService:MovieService) {}
ngOnInit(){
this.getMovies();
}

  getMovies(): void{
    this.movieService.getMovies().subscribe(movies=>this.movies=movies.slice(0,5))
  }
}
