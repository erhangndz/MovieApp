import { Injectable } from '@angular/core';
import { Movie } from './movie/movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

private apiMoviesUrl = 'api/movies';

  constructor(private loggingService: LoggingService,
       private http:HttpClient
  ) { }


  getMovies(): Observable<Movie[]>{

    this.loggingService.add('MovieService: listing movies');
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }


  getDetail(id:number):  Observable<Movie> {
    this.loggingService.add('MovieService: get movie detail by id=' +id)
     return this.http.get<Movie>(this.apiMoviesUrl+'/'+id);
  }


  update(movie:Movie): Observable<any> {
    const httpOptions= {
      headers:new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.put(this.apiMoviesUrl,movie,httpOptions);
  }

  add(movie:Movie):Observable<Movie> {
    return this.http.post<Movie>(this.apiMoviesUrl,movie);
  }

delete(id:number): Observable<Movie> {
  return this.http.delete(this.apiMoviesUrl+'/'+id);
}

}
