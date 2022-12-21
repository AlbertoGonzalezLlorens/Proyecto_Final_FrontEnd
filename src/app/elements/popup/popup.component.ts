import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent{

  id_hotel: number

  constructor(@Inject(MAT_DIALOG_DATA) id_hotel: number, private http: HttpClient){
    this.id_hotel=id_hotel;
  }


  deleteHotel(){
    this.http.delete(`https://proyectofinalapi-production-7f34.up.railway.app/api/hoteles/${this.id_hotel}`).subscribe(result=>{
    }
    )

  }

}
