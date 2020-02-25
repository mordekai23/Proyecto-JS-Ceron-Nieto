import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaGestionEdificiosComponent} from "./rutas/ruta-gestion-edificios/ruta-gestion-edificios.component";
import {RutaGestionAreasComponent} from "./rutas/ruta-gestion-areas/ruta-gestion-areas.component";
import {RutaGestionMovimientoComponent} from "./rutas/ruta-gestion-movimiento/ruta-gestion-movimiento.component";
import {EstaLogeadoPolicy} from "./services/auth/politicas/esta_logeado.policy";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";


const routes: Routes = [
  {
    path:'',
    component :RutaLoginComponent
  },
  {
    path:'login',
    component :RutaLoginComponent
  },
  {
    path:'inicio',
    component :RutaInicioComponent,
    canActivate: [EstaLogeadoPolicy]
  },
  {
    path:'inicio/gestion-edificios',
    component :RutaGestionEdificiosComponent,
    canActivate: [EstaLogeadoPolicy]
  },
  {
    path:'inicio/gestion-areas',
    component :RutaGestionAreasComponent,
    canActivate: [EstaLogeadoPolicy],
  },
  {
    path:'inicio/gestion-movimiento',
    component :RutaGestionMovimientoComponent,
    canActivate: [EstaLogeadoPolicy],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
