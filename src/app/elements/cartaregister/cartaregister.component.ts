import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cartaregister',
  templateUrl: './cartaregister.component.html',
  styleUrls: ['./cartaregister.component.css']
})
export class CartaregisterComponent implements OnInit{

  body = {
    username:'',
    nombre:'',
    apellidos:'',
    email:'',
    password:'',
    rol:{"idRol": 2}

  }


  constructor(private http:HttpClient, private authService: AuthService, private router:Router){}

  ngOnInit(): void {

  }

  register(){
    this.http.post("https://proyectofinalapi-production-7f34.up.railway.app/api/usuarios/",this.body).subscribe(result=>{
      console.log(result)
    }
    )
    this.router.navigate(['login']);


  }
}
