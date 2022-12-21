import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareMapsDataService {

  public numero: number = 0;
  public latitud: any = 41.14295925588751;
  public longitud: any = 1.12925861511575;
  public ciudad: any
  public pais: any
  public zoom: any = 2
  public hoteles: any = []
  public bannerclick: boolean;
  public ciudadBanner: any;

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
  setCiudad(ciudad: any){
    this.ciudad=ciudad
  }
  setPais(pais: any){
    this.pais=pais
  }
  setZoom(zoom: any){
    this.zoom = zoom
  }
  setHoteles(hoteles: any){
    this.hoteles=hoteles
  }
  patata(){
    this.numero +=1;
  }



}
