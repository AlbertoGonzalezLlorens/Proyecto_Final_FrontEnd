import { Component, OnInit} from '@angular/core';
import { ShareMapsDataService } from '../share-maps-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



  constructor(public shareDataService: ShareMapsDataService) { }

  recargarMaps : number = this.shareDataService.numero;


  ngOnInit(): void {
  }
}
