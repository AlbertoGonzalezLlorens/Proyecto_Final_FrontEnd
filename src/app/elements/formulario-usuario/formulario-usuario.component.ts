import { Component, OnInit } from '@angular/core';
import { ModifyuserService } from '../../services/modifyuser.service';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  constructor( public shared:ModifyuserService){ }

  appear:boolean = false;

  ngOnInit(): void {
  }

  aparecer(){
    this.appear=true;
    this.shared.setApperar(this.appear)
  }

  desvanecer(){
    this.appear=false;
    this.shared.setApperar(this.appear)
  }
}
