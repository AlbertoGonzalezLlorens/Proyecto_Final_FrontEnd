import { Component } from '@angular/core';

@Component({
  selector: 'app-cartaregister',
  templateUrl: './cartaregister.component.html',
  styleUrls: ['./cartaregister.component.css']
})
export class CartaregisterComponent {

  user={
    username: '',
    nombre:'',
    apellidos:'',
    "email": "ivanhrt@gmail.com",
    password: '',
  }
}
