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

    const Swal = require('sweetalert2');
    Swal.fire({
      title: 'Quieres eliminar el usuario?',
      showDenyButton: true,
      confirmButtonColor: "#FEBA0B",
      confirmButtonText: 'Sí',
      customClass: {
        actions: 'my-actions',
        cancelButtonColor: '#C70039',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result:any) => {
      if (result.isConfirmed) {
        // this.localStorage.logOut('user');
        // this.router.navigate(['/home']);
        Swal.fire({
          title: 'Se eliminó el usuario',
          confirmButtonColor: "#FEBA0B",
          confirmButtonText: 'Aceptar'
      });
      this.http.delete(`https://proyectofinalapi-production-7f34.up.railway.app/api/usuarios/${id_usuario}`).subscribe(result=>{
    }
    )
      this.http.get("https://proyectofinalapi-production-7f34.up.railway.app/api/usuarios/").subscribe(result=>{
        this.usuarios=result;
      }
      );
      setTimeout(() => {
        window.location.reload();
      }, 2000);


      }
      else{
        Swal.fire({
          title: 'No se eliminó el hotel',
          confirmButtonColor: "#FEBA0B",
          confirmButtonText: 'Aceptar'
      });
      }
    })



  }


}
