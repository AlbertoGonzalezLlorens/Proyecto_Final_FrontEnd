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

  habitaciones: any= null;
  contactos: any = [];
  contacto: any= null;
  contacto1: any = [];

  constructor(private shareDataService: ShareMapsDataService, private http: HttpClient,public consultaService: ConsultasService){}

  text: any = 0
  ngOnInit(): void {
    this.http.get("https://proyectofinalapi-production-7f34.up.railway.app/api/habitaciones").subscribe(result=>{
      this.habitaciones=result;
    },
    )

    this.http.get("https://proyectofinalapi-production-7f34.up.railway.app/api/contactos").subscribe(patata=>{
      this.contactos=patata;
      this.contacto1=this.contactos[0];
    },)

    //console.log("1 asdfasdf",this.habitaciones)
    //console.log("1 asdfasdf",this.habitaciones)

    //console.log(this.contactos)
    //this.contacto1 = this.habitaciones[0]
    //console.log(this.contacto1)
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


