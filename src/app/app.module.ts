import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { ElementsModule } from "./elements/elements.module";
import { FormsModule } from '@angular/forms';

import { MapaComponent } from './mapa/mapa.component';

import { HotelComponent } from './hotel/hotel.component';
import { VisorComponent } from './visor/visor.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReservasComponent } from './reservas/reservas.component';
import { RecargaMapsDirective } from './directives/recarga-maps.directive';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule } from '@angular/router';

//Providers
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt'
import { UsuariosComponent } from './backoffice/usuarios/usuarios.component';
import { HotelesComponent } from './backoffice/hoteles/hoteles.component';
import { HabitacionesComponent } from './backoffice/habitaciones/habitaciones.component';
import { AuthInterceptor,AuthInterceptorProvider } from './services/auth.interceptor.service';
import { RecargaUsuarioDirective } from './directives/recarga-usuario.directive';


@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        AboutComponent,
        ContactComponent,
        LoginComponent,
        RegisterComponent,
        SearchComponent,
        HotelComponent,
        VisorComponent,
        UsuarioComponent,
        ReservasComponent,
        RecargaMapsDirective,
        UsuariosComponent,
        HotelesComponent,
        HabitacionesComponent,
        RecargaUsuarioDirective,
    ],
    providers: [
      //JWT
      {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
      JwtHelperService,
      //Token Interceptor
      AuthInterceptorProvider
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ElementsModule,
        FormsModule,
        HttpClientModule,
        RouterModule
    ]
})
export class AppModule { }
