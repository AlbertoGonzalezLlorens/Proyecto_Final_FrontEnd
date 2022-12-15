import { Component, OnInit } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-ficha-reserva',
  templateUrl: './ficha-reserva.component.html',
  styleUrls: ['./ficha-reserva.component.css']
})
export class FichaReservaComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
  }

  createPDF(){

    const pdfDefinition:any = {
      content: [
        {
          text: 'Hola Mundo'
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();


  }
}
