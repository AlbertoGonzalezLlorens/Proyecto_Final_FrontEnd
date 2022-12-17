///<reference path="../../../../node_modules/@types/google.maps/index.d.ts"/>
import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild, Renderer2 } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';
import { ShareMapsDataService } from '../../share-maps-data.service';
import { ContadorService } from 'src/app/services/contador.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @ViewChild('divMap') divMap!: ElementRef;
  @ViewChild('inputPlaces') inputPlaces!: ElementRef;

  mapa: google.maps.Map;
  markers: google.maps.Marker[];
  distancia: string;
  formMapas: FormGroup;
  mapaComp: any;


  constructor(private renderer: Renderer2, private shareDataService: ShareMapsDataService, public contadorService: ContadorService) {
    this.markers = [];

    this.formMapas = new FormGroup({

      busqueda: new FormControl(''),
      direccion: new FormControl(''),
      referencia: new FormControl(''),
      ciudad: new FormControl(''),
      provincia: new FormControl(''),
      region: new FormControl('')
    })
  }

  ngOnInit(): void {
    //this.mapaComp = new MapaComponent(this.renderer,this.shareDataService);
  }

  ngAfterViewInit(): void {

    const opciones = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(async (position) => {

        await this.cargarMapa(position);
        this.cargarAutocomplete();

      }, null, opciones);


    } else {
      console.log("navegador no compatible")
    }

  };



  onSubmit() {
    console.log("Datos del formulario: ", this.formMapas.value)
  };






  private cargarAutocomplete() {

    const autocomplete = new google.maps.places.Autocomplete(this.renderer.selectRootElement(this.inputPlaces.nativeElement), {

      fields: ["address_components", "geometry"],
      types: ["locality", "country", "sublocality", "administrative_area_level_1"],
    })
    console.log("auto 1",autocomplete)




    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      console.log("auto 2",autocomplete)

      const place: any = autocomplete.getPlace();

      console.log("el place completo es:", place);

      this.mapa.setCenter(place.geometry.location);

      /*const marker = new google.maps.Marker({
        position: place.geometry.location
      });

      marker.setMap(this.mapa);*/
      this.llenarFormulario(place);
      console.log("latitud",place.geometry.location.lat())
      console.log("longitud",place.geometry.location.lng())
      console.log(place.address_components[0].long_name)
      /*asdf: [] = place.address_components
      length= place*/
      //console.log(place.address_components[place.address_components.length -1].long_name)
      //console.log(place.geometry.location.country)


      this.shareDataService.setLatitud(place.geometry.location.lat())
      this.shareDataService.setLongitud(place.geometry.location.lng())
      //this.shareDataService.setCiudad(place.address_components[0].long_name)
      if ((place.address_components[0].long_name == place.address_components[place.address_components.length -1].long_name)){
        this.shareDataService.setCiudad(null)
        this.shareDataService.setPais(place.address_components[place.address_components.length -1].long_name)
        this.shareDataService.setZoom(6)
      }
      else{
        this.shareDataService.setPais(place.address_components[place.address_components.length -1].long_name)
        this.shareDataService.setCiudad(place.address_components[0].long_name)
        this.shareDataService.setZoom(12)
      }


      console.log(this.shareDataService)

      this.shareDataService.patata()
      this.contadorService.setContador0()

    })
  }

  llenarFormulario(place: any) {

    const addressNameFormat: any = {
      'street_number': 'short_name',
      'route': 'long_name',
      'administrative_area_level_1': 'short_name',
      'administrative_area_level_2': 'short_name',
      'administrative_area_level_3': 'short_name',
      'country': 'long_name',

    };

    const getAddressComp = (type: any) => {
      for (const component of place.address_components) {
        if (component.types[0] === type) {

          return component[addressNameFormat[type]];
        }
      }
      return ' '
    };

    const componentForm = {
      direccion: 'location',
      ciudad: "administrative_area_level_3",
      provincia: 'administrative_area_level_2',
      region: 'administrative_area_level_1'
    };




    Object.entries(componentForm).forEach(entry => {
      const [key, value] = entry;

      this.formMapas.controls[key].setValue(getAddressComp(value))
    });

    this.formMapas.controls['direccion'].setValue(getAddressComp('route') + ' ' + getAddressComp('street_number'))
  };

  cargarMapa(position: any): any {

    const opciones = {
      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.mapa = new google.maps.Map(this.renderer.selectRootElement(this.divMap.nativeElement), opciones)


  };

}
