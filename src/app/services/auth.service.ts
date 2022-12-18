import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

const AUTH_API = 'https://proyectofinalapi-production-7f34.up.railway.app/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/jason'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private tokenStorage:TokenStorageService, private jwtHelper: JwtHelperService) { }

  login(username: string, password: string): Observable<any>{
    return this.http.post(AUTH_API+'login', {
      username,
      password
    }, httpOptions)
  }

  register(username: string, nombre: string, apellidos: string, email:string, password: string, rol:any): Observable<any>{
    return this.http.post(AUTH_API+'api/hoteles', {
      username,
      nombre,
      apellidos,
      password,
      rol
    }, httpOptions);
  }

  isAuth():boolean{
    const token:any = this.tokenStorage.getToken();
    if(this.jwtHelper.isTokenExpired(token) || !this.tokenStorage.getToken()){
      return false;
    }
    return true;
  }

}
