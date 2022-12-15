import { Component, OnInit } from '@angular/core';
import { ModifyuserService } from 'src/app/services/modifyuser.service';

@Component({
  selector: 'app-formulario-usuario-foto',
  templateUrl: './formulario-usuario-foto.component.html',
  styleUrls: ['./formulario-usuario-foto.component.css']
})
export class FormularioUsuarioFotoComponent implements OnInit{

  constructor(public shared:ModifyuserService){}

  ngOnInit(): void {
  }

  apparecer(){
  }

}
