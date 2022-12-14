import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareMapsDataService {

  latitud: any;
  longitud: any;
  location: any;

  constructor() { }
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
  setLocation(loc: any){
    this.location=loc;
  }
  getLocation(){
    return this.location;
  }

}
