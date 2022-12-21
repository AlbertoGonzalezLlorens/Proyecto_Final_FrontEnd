import { Component } from '@angular/core';
import { ShareMapsDataService } from 'src/app/share-maps-data.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  constructor(private shareMap:ShareMapsDataService){
  }

  setBarcelona(){
    this.shareMap.setLatitud(41.38735243142182);
    this.shareMap.setLongitud(2.170164937889575);
    this.shareMap.setZoom(12);
    this.shareMap.setCiudad("Barcelona");
    this.shareMap.setPais("España");
  }

  setSanFrancisco(){
    this.shareMap.setLatitud(37.76242829759058);
    this.shareMap.setLongitud(-122.44448865855782);
    this.shareMap.setZoom(12);
    this.shareMap.setCiudad("San Francisco");
    this.shareMap.setPais("Estados Unidos");
  }

  setParis(){
    this.shareMap.setLatitud(48.85973714195143);
    this.shareMap.setLongitud(2.337420039517849);
    this.shareMap.setZoom(12);
    this.shareMap.setCiudad("París");
    this.shareMap.setPais("Francia");
  }

  setOsaka(){
    this.shareMap.setLatitud(34.68887078814302);
    this.shareMap.setLongitud(135.52586036893862);
    this.shareMap.setZoom(12);
    this.shareMap.setCiudad("Osaka");
    this.shareMap.setPais("Japón");
  }

  setHonolulu(){
    this.shareMap.setLatitud(21.30731211721885);
    this.shareMap.setLongitud(-157.8586299741398);
    this.shareMap.setZoom(12);
    this.shareMap.setCiudad("Honolulu");
    this.shareMap.setPais("Estados Unidos");
  }

}
