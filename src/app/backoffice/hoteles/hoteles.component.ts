import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit{

  hoteles: any;
  vamoaponerunhotel: boolean = false;
  nombre: string = '';
  categoria: number = 0;
  precio_minimo: number = 0;
  pais: string = 'España';
  ciudad: string = 'Barcelona';
  latitud: number = 41;
  longitud: number = 3;
  id_hotel: number=500;
  hotelNuevo: any;



  constructor( private http: HttpClient, private userService: UserService){}

  ngOnInit(): void {
    this.http.get("https://proyectofinalapi-production-7f34.up.railway.app/api/hoteles").subscribe(result=>{
      this.hoteles=result;

    }
    )

  }

  addHotel(){
    if (this.vamoaponerunhotel){
      this.vamoaponerunhotel = false;
    }
    else{
      this.vamoaponerunhotel = true;
    }
  }

  guardar(){
    this.userService.body_hotel.nombre=this.nombre;
    this.userService.body_hotel.categoria=this.categoria;
    this.userService.body_hotel.precioMin=this.precio_minimo;
    this.userService.body_hotel.pais=this.pais;
    this.userService.body_hotel.poblacion=this.ciudad;
    this.userService.body_hotel.latitud=this.latitud;
    this.userService.body_hotel.longitud=this.longitud;

    this.userService.postHotel();
    //this.userService.postContacto();
    //this.userService.postHabitacion();



  }

  editHotel(hotel: any){
    //Edita el hotel actual

  }
  deleteHotel(id_hotel: any){
    this.http.delete(`https://proyectofinalapi-production-7f34.up.railway.app/api/hoteles/${id_hotel}`).subscribe(result=>{


    }
    )

  }


}
