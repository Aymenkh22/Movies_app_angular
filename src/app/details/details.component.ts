import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:number;
  film=null;
  isLoading=true;
  constructor(private route:ActivatedRoute ,private movie:MoviesService) {}
    

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id; 
    this.getMoviesDetails();
}

getMoviesDetails(){
return this.movie.getMovieById(this.id).subscribe((res:any)=>{
  this.film=res.data.movie;
  this.isLoading=!this.isLoading;
  console.log(this.film);
})
}
}
