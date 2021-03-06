import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() id:number;
  @Input() title:string;
  @Input() url:string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.url);
  }

}
