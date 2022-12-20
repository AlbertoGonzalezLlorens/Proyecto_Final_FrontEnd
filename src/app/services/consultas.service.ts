import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  public hoteles: any
  public numero:number=0;

  constructor() { }

  setHoteles(hoteles:any){
    this.hoteles=hoteles
  }

  aumentarUno(){
    this.numero+=1;
  }

}
