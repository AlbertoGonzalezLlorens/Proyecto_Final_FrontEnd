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

    const centro = { lat: 41.11667, lng: 1.25 };

    const opciones = {
      center: centro,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.mapa = new google.maps.Map(document.getElementById("map") as HTMLElement,opciones)

    const marker = new google.maps.Marker({
      position: centro,
      map: this.mapa,
    });
  };


}


