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
      console.log("1",this.id);
    },
    )
  }

  putUsuario(body:any){
    console.log("Hola",body);
    this.http.put(`https://proyectofinalapi-production-7f34.up.railway.app/api/usuarios/${this.id}`, body,httpOptions).subscribe(result=>{
      console.log("usuario put result",result)
    },
    )
  }
}
