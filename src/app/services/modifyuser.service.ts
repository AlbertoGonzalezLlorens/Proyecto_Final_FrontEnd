import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModifyuserService {


  appear:boolean;

  constructor() {}

  setApperar(data:boolean){
    this.appear = data;
  }

  getAppear(){
    return this.appear;
  }


}
