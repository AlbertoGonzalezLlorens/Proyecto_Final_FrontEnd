import { Component, OnInit } from '@angular/core';
import { ContadorService } from 'src/app/services/contador.service';

@Component({
  selector: 'app-cardhotels',
  templateUrl: './cardhotels.component.html',
  styleUrls: ['./cardhotels.component.css']
})
export class CardhotelsComponent implements OnInit{

  constructor(public contadorService: ContadorService){}
  ngOnInit(): void {
    this.contadorService.contador++
  }

}
