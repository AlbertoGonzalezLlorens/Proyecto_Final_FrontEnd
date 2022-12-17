import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  public hotel: any

  constructor() { }

  setHotel(hotel:any){
    this.hotel=hotel
  }

}
