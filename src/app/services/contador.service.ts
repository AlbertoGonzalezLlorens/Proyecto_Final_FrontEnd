import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  constructor() { }
  public contador: any = 0;

  public setContador0(){
    this.contador=0;
  }

}
