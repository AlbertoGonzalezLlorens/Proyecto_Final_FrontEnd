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
  contacto: any= null;


  constructor(private shareDataService: ShareMapsDataService, private http: HttpClient,public consultaService: ConsultasService){}

  text: any = 0
  ngOnInit(): void {
    this.http.get("https://proyectofinalapi-production-7f34.up.railway.app/api/habitaciones").subscribe(result=>{
      this.habitaciones=result;
    },
    )
    this.http.get(`https://proyectofinalapi-production-7f34.up.railway.app/api/hoteles/contactos/${this.consultaService.hoteles.id_hotel}`).subscribe(result=>{
      this.contacto=result;
      //console.log("contacto",this.contacto)
    },
    )
  }
}


