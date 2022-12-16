import { Component, OnInit} from '@angular/core';
import { ShareMapsDataService } from '../share-maps-data.service';
import { HttpClient } from '@angular/common/http';
import { ContadorService } from 'src/app/services/contador.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  hoteles: any;
  hotelesFiltrados: any;
  contResultados: number = 0;

  constructor(public shareDataService: ShareMapsDataService, private http: HttpClient, public contadorService: ContadorService) { }

  recargarMaps : number = this.shareDataService.numero;


  ngOnInit(): void {
    this.http.get("http://localhost:3000/hoteles").subscribe(result=>{
      this.hoteles=result;
    },
    error => {console.log("Problemitas");})

  }


  sumarResultado(){
    this.contResultados++;
  }

}
