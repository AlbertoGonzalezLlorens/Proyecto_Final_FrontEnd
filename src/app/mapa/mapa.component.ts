///<reference path="../../../node_modules/@types/google.maps/index.d.ts"/>

import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild, Renderer2 } from '@angular/core'
import { ShareMapsDataService } from '../share-maps-data.service';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})



export class MapaComponent implements OnInit{

  @ViewChild('divMap') divMap!: ElementRef;
  @ViewChild('inputPlaces') inputPlaces!: ElementRef;

  mapa!: google.maps.Map;
  markers: google.maps.Marker[];
  distancia!: string;
  autocomplete: any;


  constructor(private renderer: Renderer2, private shareDataService: ShareMapsDataService) {
    this.markers = [];


  }

  ngOnInit(): void {
    if(this.shareDataService.bannerclick){
      this.cargarMapa();
      this.shareDataService.bannerclick=false;
    }
  }

  ngAfterViewInit(): void {

    const opciones = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(async (position) => {

        await this.cargarMapa();
        //this.cargarAutocomplete();

      }, null, opciones);


    } else {
      console.log("navegador no compatible")
    }

  };











  cargarMapa(): any {

    const opciones = {
      center: new google.maps.LatLng(this.shareDataService.latitud, this.shareDataService.longitud),
      zoom: this.shareDataService.zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.mapa = new google.maps.Map(this.renderer.selectRootElement(this.divMap.nativeElement), opciones)
    //console.log("papito",this.shareDataService.hoteles[0].latitud, "     ", this.shareDataService.hoteles[0].longitud)
    for (let i=0; i<this.shareDataService.hoteles.length; i++){
      //console.log("papito",this.shareDataService.hoteles[i].latitud, "     ", this.shareDataService.hoteles[i].longitud)
      const markerPosition = new google.maps.Marker({
        position: new google.maps.LatLng(this.shareDataService.hoteles[i].longitud, this.shareDataService.hoteles[i].latitud),
        title: this.shareDataService.hoteles[i].nombre,
      });

      markerPosition.setMap(this.mapa);
      this.markers.push(markerPosition);
    }





    /*for (let i=0; i<this.shareDataService.hoteles.lenght; i++){
      let markerPosition = new google.maps.Marker({
        position: new google.maps.LatLng(this.shareDataService.hoteles[i].latitud,this.shareDataService.hoteles[i].longitud),
        title: this.shareDataService.hoteles[i].nombre,
      });
      markerPosition.setMap(this.mapa);
      this.markers.push(markerPosition);
    }*/
  };


}
