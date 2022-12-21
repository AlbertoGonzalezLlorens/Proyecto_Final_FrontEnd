import { Component, Input, OnInit } from '@angular/core';
import { ContadorService } from 'src/app/services/contador.service';
import { ConsultasService } from 'src/app/services/consultas.service';
import { ShareMapsDataService } from 'src/app/share-maps-data.service';


@Component({
  selector: 'app-cardhotels',
  templateUrl: './cardhotels.component.html',
  styleUrls: ['./cardhotels.component.css']
})
export class CardhotelsComponent implements OnInit{

  @Input() hotel: any;

  url:any;

  constructor(public shareDataService: ShareMapsDataService,public contadorService: ContadorService, public consultasService: ConsultasService){}
  ngOnInit(): void {
    this.contadorService.contador++;
    this.url = "../../../assets/img/"+this.hotel.nombre+".jpg";
    console.log(this.url);
  }

  enviarInfo(){
    this.consultasService.hoteles=this.hotel
    this.shareDataService.zoom=17
    console.log(this.hotel.latitud)
    console.log(this.hotel.longitud)
    this.shareDataService.setLatitud(this.hotel.longitud)
    this.shareDataService.setLongitud(this.hotel.latitud)

  }

}
