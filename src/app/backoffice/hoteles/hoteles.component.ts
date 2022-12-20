import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit{

  hoteles: any;
  hotelSelected: any
  constructor( private http: HttpClient){}

  ngOnInit(): void {
    this.http.get("https://proyectofinalapi-production-7f34.up.railway.app/api/hoteles").subscribe(result=>{
      this.hoteles=result;

    }
    )

  }



}
