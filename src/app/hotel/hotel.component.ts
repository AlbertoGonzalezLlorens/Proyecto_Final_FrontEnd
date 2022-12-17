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
  contactos: any
  contacto: any
  contacto1: any

  constructor(private shareDataService: ShareMapsDataService, private http: HttpClient,public consultaService: ConsultasService){}

  text: any = 0
  ngOnInit(): void {
    this.http.get("http://localhost:3000/habitaciones").subscribe(result=>{
      this.habitaciones=result;
    },
    error => {console.log("Problemitas");})

    this.http.get("http://localhost:3000/contactos").subscribe(patata=>{
      this.contactos=patata;
    },
    error => {console.log("Problemitas");})
    //console.log("1 asdfasdf",this.habitaciones)
    //console.log("1 asdfasdf",this.habitaciones)

    this.contacto1 = this.contactos
    this.buscarContacto()
  }

  buscarContacto() {



    /*for (let i=0; i<this.contactos.length; i++) {
      console.log("2 ",this.contactos[i].email)

      if (this.contactos[i].id_hotel.id_hotel == this.consultaService.hoteles.id_hotel) {
        this.contacto = this.contactos[i]

      }
    }*/
  }


}


