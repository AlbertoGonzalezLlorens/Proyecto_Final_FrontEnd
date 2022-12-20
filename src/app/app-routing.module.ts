import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HotelComponent } from './hotel/hotel.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReservasComponent } from './reservas/reservas.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { HotelesComponent } from './backoffice/hoteles/hoteles.component';
import { UsuariosComponent } from './backoffice/usuarios/usuarios.component';

const routes: Routes = [
  {
    path:'home-page',
    component: HomePageComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'search',
    component: SearchComponent
  },
  {
    path:'hotel',
    component: HotelComponent
  },
  {
    path:'usuario',
    component: UsuarioComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'reservas',
    component: ReservasComponent,
    canActivate: [AuthGuard] //[RoleGuard]
  },
  {
    path:'backoffice/hoteles',
    component: HotelesComponent,
    canActivate: [RoleGuard]
  },
  {
    path:'backoffice/usuarios',
    component: UsuariosComponent,
    canActivate: [RoleGuard]
  },
  { path: '', redirectTo:'/home-page', pathMatch:'full'},
  {
    path:'**',
    pathMatch: 'full',
    redirectTo: 'home-page'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
