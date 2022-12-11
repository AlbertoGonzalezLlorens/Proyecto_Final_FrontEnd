import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})

export class MapaComponent implements OnInit{


  ngOnInit(): void {


    let loader = new Loader({
      apiKey: "AIzaSyBd6UBDHg2HSXKg_BnXlMrJEvmATKQ7uWo"

    });
    let map: google.maps.Map;
    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 10,
      });
    });
  }

}
