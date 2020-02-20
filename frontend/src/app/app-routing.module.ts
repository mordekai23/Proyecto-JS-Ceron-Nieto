import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaGestionEdificiosComponent} from "./rutas/ruta-gestion-edificios/ruta-gestion-edificios.component";
import {RutaGestionAreasComponent} from "./rutas/ruta-gestion-areas/ruta-gestion-areas.component";
import {RutaGestionSensorAreaComponent} from "./rutas/ruta-gestion-sensor-area/ruta-gestion-sensor-area.component";
import {RutaGestionMovimientoComponent} from "./rutas/ruta-gestion-movimiento/ruta-gestion-movimiento.component";


const routes: Routes = [
  {
    path:'login',
    component :RutaLoginComponent
  },
  {
    path:'gestion-edificios',
    component :RutaGestionEdificiosComponent
  },
  {
    path:'gestion-areas',
    component :RutaGestionAreasComponent,

  },
  {
    path:'gestion-sensor-area',
    component :RutaGestionSensorAreaComponent,

  },
  {
    path:'gestion-movimiento',
    component :RutaGestionMovimientoComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
