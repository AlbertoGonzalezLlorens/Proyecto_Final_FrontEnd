import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  usuarios: any;

  nombre: string = '';
  username: number = 0;
  precio_minimo: number = 0;
  pais: string = 'España';
  ciudad: string = 'Barcelona';
  latitud: number = 41;
  longitud: number = 3;
  id_usuario: number=500;
  hotelNuevo: any;



  constructor( private http: HttpClient, private userService: UserService){}

  ngOnInit(): void {
    this.http.get("https://proyectofinalapi-production-7f34.up.railway.app/api/usuarios/").subscribe(result=>{
      this.usuarios=result;
      console.log(this.usuarios)

    }
    )

  }


  editHotel(usuario: any){
    //Edita el hotel actual

  }
  deleteUsuario(id_usuario: any){
    this.http.delete(`https://proyectofinalapi-production-7f34.up.railway.app/api/usuarios/${id_usuario}`).subscribe(result=>{


    }
    )

  }


}
