import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  hotel: any;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get("http://localhost:3000/hoteles").subscribe(result=>{
      this.hotel=result;
    },
    error => {console.log("Problemitas");})
  }

}
