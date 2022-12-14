import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-cartalogin',
  templateUrl: './cartalogin.component.html',
  styleUrls: ['./cartalogin.component.css']
})
export class CartaloginComponent implements OnInit{

  user={
    username:'',
    password:''
  }




  constructor(public authService: AuthService,
    public tokenStorage:TokenStorageService,
    private router:Router){}

    ngOnInit(): void {

    }

    login(){
      this.authService.login(this.user.username, this.user.password).subscribe( res => {
        this.tokenStorage.saveToken(res.token);
        this.router.navigate(['home-page']);
      })
    }
}
