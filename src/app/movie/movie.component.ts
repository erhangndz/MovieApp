import { Component } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  movies: any;

  title = 'Movies List';
  selectedMovie?: Movie;
  constructor(private movieService: MovieService, private location: Location) {}

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

  add(name: string, imageUrl: string, description: string): void {
    this.movieService
      .add({
        name,
        imageUrl,
        description,
      } as Movie)
      .subscribe((movie) => this.movies.push(movie));
  }

  delete(id: number): void {
    this.movieService.delete(id).subscribe(() => {
      this.location.back();
    });
  }
}
