import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { NewformComponent } from './newform/newform.component';
import { MapaComponent } from '../mapa/mapa.component';
import { CartaloginComponent } from './cartalogin/cartalogin.component';
import { CartaloginenlaceComponent } from './cartaloginenlace/cartaloginenlace.component';
import { CartaregisterComponent } from './cartaregister/cartaregister.component';
import { CartaregisterenlaceComponent } from './cartaregisterenlace/cartaregisterenlace.component';
import { CardhotelsComponent } from './cardhotels/cardhotels.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { HeaderUsuarioComponent } from './header-usuario/header-usuario.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    SearchBarComponent,
    HomeCardsComponent,
    NewformComponent,
    MapaComponent,
    CartaloginComponent,
    CartaloginenlaceComponent,
    CartaregisterComponent,
    CartaregisterenlaceComponent,
    CardhotelsComponent,
    DatepickerComponent,
    HeaderUsuarioComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    SearchBarComponent,
    HomeCardsComponent,
    NewformComponent,
    MapaComponent,
    CartaloginComponent,
    CartaloginenlaceComponent,
    CartaregisterComponent,
    CartaregisterenlaceComponent,
    CardhotelsComponent,
    DatepickerComponent,
    HeaderUsuarioComponent
  ]
})
export class ElementsModule { }
