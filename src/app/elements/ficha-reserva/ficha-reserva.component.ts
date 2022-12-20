import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
/*import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;*/

@Component({
  selector: 'app-ficha-reserva',
  templateUrl: './ficha-reserva.component.html',
  styleUrls: ['./ficha-reserva.component.css']
})
export class FichaReservaComponent implements OnInit{

  constructor(private authService:AuthService, public userService:UserService){}

  ngOnInit(): void {
    this.authService.getUsername();
    console.log("hola",this.authService.username);
    this.userService.getReservas(this.authService.username);
    console.log(this.userService.todasReservas);
  }

  /*createPDF(){

    const pdfDefinition:any = {
      content: [
        {
          text: 'Hola Mundo'
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();


  }*/
}
