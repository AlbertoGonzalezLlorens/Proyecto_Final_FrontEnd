import { Component, OnInit } from '@angular/core';
import { ShareMapsDataService } from '../../share-maps-data.service';
import { HttpClient } from '@angular/common/http';
import { ContadorService } from 'src/app/services/contador.service';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit{

  hoteles: any;
  ciudad:string;
  pais:string;
  constructor(public shareDataService: ShareMapsDataService, private http: HttpClient, public contadorService: ContadorService){}

  ngOnInit(): void {
    if(this.shareDataService.ciudad==null){
      this.ciudad="a";
    }else{
      this.ciudad=this.shareDataService.ciudad;
    }
    if(this.shareDataService.pais==null){
      this.pais="a";
    }else{
      this.pais=this.shareDataService.pais;
    }
    console.log("1",this.ciudad)
    console.log("2",this.pais)
    console.log("2",this.shareDataService.ciudad)
    console.log("2",this.shareDataService.pais)
    console.log("3",this.shareDataService.precio)
    console.log("4",this.shareDataService.desayuno)
    console.log("5",this.shareDataService.categoria)
    this.http.get(`https://proyectofinalapi-production-7f34.up.railway.app/api/hoteles/${this.ciudad}/${this.pais}/${this.shareDataService.precio}/${this.shareDataService.desayuno}/${this.shareDataService.categoria}`).subscribe(result=>{
      this.hoteles=result;
      this.shareDataService.setHoteles(this.hoteles)
    }
    )
  }

}
