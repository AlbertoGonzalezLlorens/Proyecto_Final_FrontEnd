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
import { PopupComponent } from './popup/popup.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { FormularioUsuarioFotoComponent } from './formulario-usuario-foto/formulario-usuario-foto.component';
import { FichaReservaComponent } from './ficha-reserva/ficha-reserva.component';
import { PdfComponent } from './pdf/pdf.component';
import { AppRoutingModule } from './../app-routing.module';
import { FormsModule } from '@angular/forms';




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
    PopupComponent,
    FormularioUsuarioComponent,
    FormularioUsuarioFotoComponent,
    FichaReservaComponent,
    PdfComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
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
    HeaderUsuarioComponent,
    PopupComponent,
    FormularioUsuarioComponent,
    FormularioUsuarioFotoComponent,
    FichaReservaComponent,
    PdfComponent
  ]
})
export class ElementsModule { }
