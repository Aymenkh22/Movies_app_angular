import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  moviesList=[];
  constructor(private movies:MoviesService) { }
  searchForm= new FormGroup(
    {q:new FormControl('')}
    
    );

  ngOnInit(): void {
    this.getMoviesList();
    console.log(this.searchForm.value.q);
  }
  getMoviesList(){
    this.movies.getMovies().subscribe((data:any)=>{this.moviesList=data.data.movies;})
  }
  search(){
    const q=this.searchForm.value.q;
    this.movies.searchByQuery(q).subscribe((data:any)=>{
      this.searchForm.setValue({q:''})
      if(data.data.movies.movie_count!=0){
        this.moviesList=data.data.movies;

      }})
  }
  

}
