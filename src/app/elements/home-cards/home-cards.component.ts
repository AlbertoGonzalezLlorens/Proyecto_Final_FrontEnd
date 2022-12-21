import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.css']
})
export class HomeCardsComponent implements OnInit{
  min:number=1;
  max:number=15;
  hotel1:any;
  numeroR1:number;
  hotel2:any;
  numeroR2:number;
  hotel3:any;
  numeroR3:number;
  hotel4:any;
  numeroR4:number;
  outwhile:boolean=true;
  url1:string="";
  url2:string="";
  url3:string="";
  url4:string="";

  constructor(private http:HttpClient){}

  ngOnInit(): void {

    this.numeroR1=this.getRandomArbitrary();
    do{
      this.numeroR2=this.getRandomArbitrary();
      if(this.numeroR1!=this.numeroR2){
        this.outwhile=false;
      }
    }
    while(this.outwhile);
    this.outwhile=true;
    do{
      this.numeroR3=this.getRandomArbitrary();
      if(this.numeroR1!=this.numeroR3 && this.numeroR2!=this.numeroR3){
        this.outwhile=false;
      }
    }
    while(this.outwhile);
    this.outwhile=true;
    do{
      this.numeroR4=this.getRandomArbitrary();
      if(this.numeroR1!=this.numeroR4 && this.numeroR2!=this.numeroR4 && this.numeroR3!=this.numeroR4){
        this.outwhile=false;
      }
    }
    while(this.outwhile);
    this.outwhile=true;

    this.http.get(`https://proyectofinalapi-production-7f34.up.railway.app/api/hoteles/${this.numeroR1}`).subscribe(result=>{
      this.hotel1=result
      this.url1 = "../../../assets/img/"+this.hotel1.nombre+".jpg";
    },
    )
    this.http.get(`https://proyectofinalapi-production-7f34.up.railway.app/api/hoteles/${this.numeroR2}`).subscribe(result=>{
      this.hotel2=result
      this.url2 = "../../../assets/img/"+this.hotel2.nombre+".jpg";
    },
    )
    this.http.get(`https://proyectofinalapi-production-7f34.up.railway.app/api/hoteles/${this.numeroR3}`).subscribe(result=>{
      this.hotel3=result
      this.url3 = "../../../assets/img/"+this.hotel3.nombre+".jpg";
    },
    )
    this.http.get(`https://proyectofinalapi-production-7f34.up.railway.app/api/hoteles/${this.numeroR4}`).subscribe(result=>{
      this.hotel4=result
      this.url4 = "../../../assets/img/"+this.hotel4.nombre+".jpg";
    },
    )
    console.log(this.numeroR4);
    console.log(this.hotel1);
    console.log(this.hotel1);
    console.log(this.hotel1);
  }

  getRandomArbitrary() {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  }
}
