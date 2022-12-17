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

  contResultados: number = 0;

  constructor(public shareDataService: ShareMapsDataService, private http: HttpClient, public contadorService: ContadorService) { }

  recargarMaps : number = this.shareDataService.numero;


  ngOnInit(): void {
    this.http.get("https://proyectofinalapi-production-7f34.up.railway.app/api/hoteles").subscribe(result=>{
      this.hoteles=result;
      this.shareDataService.setHoteles(this.hoteles)
    }
    )

  }


  sumarResultado(){
    this.contResultados++;
  }

}
