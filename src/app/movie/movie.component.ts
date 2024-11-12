import { Component } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  movies: any;

  title = 'Movies List';
  selectedMovie?: Movie;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
}
