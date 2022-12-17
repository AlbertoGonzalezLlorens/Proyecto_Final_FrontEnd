import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  public hoteles: any

  constructor() { }

  setHoteles(hoteles:any){
    this.hoteles=hoteles
  }

}
