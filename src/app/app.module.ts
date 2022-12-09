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

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        AboutComponent,
        ContactComponent,
        LoginComponent,
        RegisterComponent,
        SearchComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ElementsModule
    ]
})
export class AppModule { }
