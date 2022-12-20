import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsultasService } from '../services/consultas.service';
import { ShareMapsDataService } from '../share-maps-data.service';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

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
  personas:number=0;
  diaEntrada:Date;
  diaSalida:Date;
  dateDay = new Date();

  body = {
    fecha_inicio: new Date,
    fecha_fin:  new Date,
    numero_personas: 1
  }

  constructor(private shareDataService: ShareMapsDataService, private http: HttpClient,public consultaService: ConsultasService,
    private authservice:AuthService, private userService:UserService, private router:Router){}

  text: any = 0
  ngOnInit(): void {
    this.http.get(`https://proyectofinalapi-production-7f34.up.railway.app/api/hoteles/contactos/${this.consultaService.hoteles.id_hotel}`).subscribe(result=>{
      this.contacto=result;
      console.log("contacto",this.contacto)
      console.log(this.consultaService.hoteles.id_hotel);
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

  reservar(){
    this.body.fecha_inicio=this.diaEntrada;
    this.body.fecha_fin=this.diaSalida;
    this.body.numero_personas=this.personas;
    this.userService.postFactura(this.body);
    this.authservice.getUsername();
    console.log(this.authservice.username);
    this.userService.busquedaUsername(this.authservice.username);
    this.userService.body_reserva.precio_final=this.consultaService.hoteles.precioMin+this.habitaciones[this.text-1].precio;
    this.userService.body_reserva.id_habitacion.id_habitacion=this.habitaciones[this.text-1].id_habitacion;
    console.log(this.userService.body_reserva);
    this.userService.postReservas();
    this.router.navigate(['home-page']);
  }
}


