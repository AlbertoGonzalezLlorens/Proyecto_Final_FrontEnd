import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsultasService } from '../services/consultas.service';
import { ShareMapsDataService } from '../share-maps-data.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  habitaciones: any= null;
  contacto: any= null;
  boton_reserva:number=0;
  precio:number=0;

  constructor(private shareDataService: ShareMapsDataService, private http: HttpClient,public consultaService: ConsultasService,
    private authservice:AuthService){}

  text: any = 0
  ngOnInit(): void {
    this.http.get(`https://proyectofinalapi-production-7f34.up.railway.app/api/hoteles/contactos/${this.consultaService.hoteles.id_hotel}`).subscribe(result=>{
      this.contacto=result;
      //console.log("contacto",this.contacto)
    },
    )
    this.http.get(`https://proyectofinalapi-production-7f34.up.railway.app/api/habitaciones/hotel/${this.consultaService.hoteles.id_hotel}`).subscribe(result=>{
    this.habitaciones = result;
    },
    )

    if(this.authservice.isAuth()){
      this.boton_reserva=1;
    } else {
      this.boton_reserva=0;
    }

    console.log(this.consultaService.hoteles)
  }
}


