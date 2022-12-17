import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsultasService } from '../services/consultas.service';
import { ShareMapsDataService } from '../share-maps-data.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  habitaciones: any

constructor(private shareDataService: ShareMapsDataService, private http: HttpClient,public consultaService: ConsultasService){}

  ngOnInit(): void {
    this.http.get("http://localhost:3000/habitaciones").subscribe(result=>{
      this.habitaciones=result;
    },
    error => {console.log("Problemitas");})


  }




}
