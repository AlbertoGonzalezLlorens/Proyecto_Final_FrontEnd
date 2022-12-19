import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  navbar:number=0;
  token2:any;

  constructor(private token:TokenStorageService, private authservice:AuthService){}

  ngOnInit(): void {
    if (this.authservice.isAdmin()){
      this.navbar=2;
    }
    else if(this.authservice.isAuth()){
      this.navbar=1;
    } else {
      this.navbar=0;
    }
  }

  desconexion(){
    this.token.signOut();
  }

}
