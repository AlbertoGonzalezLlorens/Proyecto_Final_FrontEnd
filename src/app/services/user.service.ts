import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import decode from 'jwt-decode';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/jason'})
};

//const API_URL = 'https://proyectofinalapi-production-7f34.up.railway.app/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any;
  token_decode:any;
  username:string;
  usuario:any;
  id:number;
  nombre:any;
  apellidos:any;
  email:any;
  telefono:any;
  password:any;
  foto:any;
  rol:any;
  factura:any;
  id_factura:any;
  reservas:any;
  body_reserva ={
    precio_final:0,
    id_usuario:{
        "id_usuario": 0
        }
    ,
    id_habitacion: {
        "id_habitacion": 0
        }
    ,
    id_factura: {
        "id_factura": 0
    }
  }
  todasReservas:any;

  body_hotel ={
    nombre:"",
    descripcion: "",
    categoria: 0,
    pais: "",
    poblacion: "",
    direccion: "",
    codigo_postal: 0,
    longitud: 0,
    latitud: 0,
    desayuno: false,
    id_registrador: {
      "id_usuario": 1
    },
    precioMin: 0
  }
  id_hotel: any;
  hotelNuevo: any;
  body_habitacion ={
    num_habitacion: 111,
        tipo: "Estándar",
        descripcion: "Habitación sencilla sin sobrecoste",
        precio: 0.0,
        foto: null,
        hotel: {
            "id_hotel": 1
            },
    }
  body_contacto ={
    telefono_contacto:123123123,
    email: "contacto@ejemplo.com",
    id_hotel: {
      "id_hotel": 1
    },
  }



  constructor(private http: HttpClient, private tokenStorage:TokenStorageService) { }

  obtenerInfoUsuario(){
    this.token=this.tokenStorage.getToken();
    this.token_decode=decode(this.token);
    this.username=this.token_decode.sub;
    this.busquedaUsername(this.username);
  }

  busquedaUsername(username:string){
    this.http.get(`https://proyectofinalapi-production-7f34.up.railway.app/api/usuarios/username/${username}`).subscribe(result=>{
      this.usuario=result;
      this.id=this.usuario[0].id_usuario;
      this.nombre=this.usuario[0].nombre;
      this.apellidos=this.usuario[0].apellidos;
      this.email=this.usuario[0].email;
      this.telefono=this.usuario[0].telefono;
      this.password=this.usuario[0].password;
      this.foto=this.usuario[0].foto;
      this.body_reserva.id_usuario.id_usuario=this.id;
    },
    )
  }

  putUsuario(body:any){
    //console.log("Hola",body);
    this.http.put(`https://proyectofinalapi-production-7f34.up.railway.app/api/usuarios/solo/${this.id}`,body).subscribe(result=>{
      //console.log("usuario put result",result)
    },
    )
  }

  postFactura(body:any){
    //console.log("Hola",body);
    this.http.post('https://proyectofinalapi-production-7f34.up.railway.app/api/facturas',body).subscribe(result=>{
      this.factura=result;
      this.body_reserva.id_factura.id_factura=this.factura.id_factura;
    },
    )
  }

  postReservas(){
    this.http.post('https://proyectofinalapi-production-7f34.up.railway.app/api/reservas',this.body_reserva).subscribe(result=>{
      this.reservas=result;
    },
    )
  }

  getReservas(username:string){
    this.http.get(`https://proyectofinalapi-production-7f34.up.railway.app/api/reservas/usuario/${username}`).subscribe(result=>{
      this.todasReservas=result;
    },
    )
  }
  postHotel(){
    this.http.post('https://proyectofinalapi-production-7f34.up.railway.app/api/hoteles',this.body_hotel).subscribe(result=>{
      this.hotelNuevo=result;
      //console.log("aloha",this.body_hotel);
      //console.log("aloha",this.body_contacto);
      //console.log("aloha",this.body_habitacion);
      this.body_contacto.id_hotel.id_hotel=this.hotelNuevo.id_hotel;
      this.body_habitacion.hotel.id_hotel=this.hotelNuevo.id_hotel;
      console.log("me cago en buda",this.body_contacto.id_hotel.id_hotel);
      console.log("aun mas",this.body_habitacion.hotel.id_hotel)
      console.log(this.hotelNuevo);
      console.log("aloha",this.body_hotel);
      console.log("aloha",this.body_contacto);
      console.log("aloha",this.body_habitacion);
      this.postContacto();
      this.postHabitacion();
    },
    )
  }
  postContacto(){

      console.log("aloha",this.body_contacto);

    this.http.post('https://proyectofinalapi-production-7f34.up.railway.app/api/contactos',this.body_contacto).subscribe(result=>{
      console.log("result post contacto",result)
    },
    )
  }
  postHabitacion(){
    console.log(this.body_habitacion)
    this.http.post('https://proyectofinalapi-production-7f34.up.railway.app/api/habitaciones',this.body_habitacion).subscribe(result=>{
      console.log("result post habitacion",result)
    },
    )
  }

}
