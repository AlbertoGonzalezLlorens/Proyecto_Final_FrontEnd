import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//const API_URL = 'https://proyectofinalapi-production-7f34.up.railway.app/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /*getLogin(): Observable<any>{
    return this.http.get(API_URL+'login',{responseType:'text'})
  }*/
}
