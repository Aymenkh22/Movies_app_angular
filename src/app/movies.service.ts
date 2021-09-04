import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient ) { }
  getMovies(){

      return this.http.get('https://yts.mx/api/v2/list_movies.json');

  }
  searchByQuery(q:string){

    return this.http.get('https://yts.mx/api/v2/list_movies.json?query_term='+q);
  }
  getMovieById(id){

    return this.http.get('https://yts.mx/api/v2/movie_details.json?movie_id='+id);
  }
}
