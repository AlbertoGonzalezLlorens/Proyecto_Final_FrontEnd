import { Component, OnInit } from '@angular/core';
import { ModifyuserService } from '../../services/modifyuser.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  constructor( public shared:ModifyuserService, public userService:UserService){ }

  appear:boolean = false;
  nombre:string='';
  apellidos:string='';
  email:string='';
  telefono:string='';

  body = {
    username:'patata',
    nombre:'',
    apellidos:'',
    email:'',
    password:'patata',
    foto:null,
    telefono:0,
    rol:{"idRol": 2}

  }

  ngOnInit(): void {
    this.userService.obtenerInfoUsuario();

  }

  aparecer(){
    this.appear=true;
    this.shared.setApperar(this.appear)
  }

  desvanecer(){
    this.appear=false;
    this.shared.setApperar(this.appear)
  }

  guardar(){
    console.log(this.nombre)
    this.userService.obtenerInfoUsuario();
    if(this.nombre != ''){
      this.body.nombre=this.nombre;
    } else {
      this.body.nombre=this.userService.nombre
    };
    if(this.apellidos != ''){
      this.body.apellidos=this.apellidos;
    }else{
      this.body.apellidos=this.userService.apellidos;
    };

    if(this.email != ''){
      this.body.email=this.email;
    }else{
      this.body.email=this.userService.email;
    };

    if(this.telefono != ''){
      this.body.telefono=+this.telefono;
    }else{
      this.body.telefono=this.userService.telefono
    };
    console.log("2",this.body)
    this.userService.putUsuario(this.body);
    this.appear=false;
    this.shared.setApperar(this.appear);
  }
}
