import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareMapsDataService {

  public numero: number = 0;
  public latitud: any = 41.14295925588751;
  public longitud: any = 1.12925861511575;

  constructor() { }
  setNumero(numero: number){
    this.numero=numero
  }
  setLatitud(lat: any){
    this.latitud=lat;
  }
  setLongitud(long: any){
    this.longitud=long;
  }
  getLatitud(){
    return this.latitud;
  }
  getLongitud(){
    return this.longitud;
  }
  patata(){
    this.numero +=1;

  }

}
