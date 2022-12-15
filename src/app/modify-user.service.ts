import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModifyUserService {

  appear:boolean = false;

  constructor() { }

  setApperar(data:boolean){
    this.appear = data;
  }

  getAppear(){
    return this.appear;
  }
}
