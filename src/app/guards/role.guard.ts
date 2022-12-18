import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    public router:Router,
    public tokenStorage:TokenStorageService

  ){}

  canActivate(route: ActivatedRouteSnapshot):boolean{
    const expectedRole:string = 'ROLE_admin';
    const token:any = this.tokenStorage.getToken();

    const patata:any = decode(token);
    const roles:string = patata.roles;


    if(roles!=expectedRole){
      console.log('Usuario no autorizado');
      return false;
    }

    return true;
  }

}
