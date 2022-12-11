///<reference path="../../../node_modules/@types/google.maps/index.d.ts"/>

import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})



export class MapaComponent implements OnInit{

  mapa!: google.maps.Map;
  ngOnInit(): void {

    this.cargarMapa();

  }

  cargarMapa(): any{

    const opciones = {
      center: new google.maps.LatLng(41.11667, 1.25),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    console.log(opciones);
    this.mapa = new google.maps.Map(document.getElementById("map") as HTMLElement,opciones)
  };

}


