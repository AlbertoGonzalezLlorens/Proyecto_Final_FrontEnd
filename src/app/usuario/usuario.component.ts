import { Component } from '@angular/core';
import { ConsultasService } from '../services/consultas.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  constructor(public consultaService:ConsultasService){}

  recargarFormulario:number  = this.consultaService.numero;


}
