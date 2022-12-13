import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  ngOnInit(): void {
  }

  text:any = document.getElementById("pickaroom") as HTMLInputElement;

}
