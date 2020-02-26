import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaGestionEdificiosComponent} from "./rutas/ruta-gestion-edificios/ruta-gestion-edificios.component";
import {RutaGestionAreasComponent} from "./rutas/ruta-gestion-areas/ruta-gestion-areas.component";
import {RutaGestionMovimientoComponent} from "./rutas/ruta-gestion-movimiento/ruta-gestion-movimiento.component";
import {EstaLogeadoPolicy} from "./services/auth/politicas/esta_logeado.policy";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaGestionarUsuariosComponent} from "./rutas/ruta-gestionar-usuarios/ruta-gestionar-usuarios.component";
import {RutaGestionDepartamentosComponent} from "./rutas/ruta-gestion-departamentos/ruta-gestion-departamentos.component";
import {RutaGestionSensoresComponent} from "./rutas/ruta-gestion-sensores/ruta-gestion-sensores.component";
import {RutaSensorAreaUsuarioComponent} from "./rutas/ruta-sensor-area-usuario/ruta-sensor-area-usuario.component";
import {RutaActivarNotificacionComponent} from "./rutas/ruta-activar-notificacion/ruta-activar-notificacion.component";
import {RutaRecibirNotificacionComponent} from "./rutas/ruta-recibir-notificacion/ruta-recibir-notificacion.component";
import {EsAdministradorPolicy} from "./services/auth/politicas/es_administrador.policy";
import {EsUsuarioPolicy} from "./services/auth/politicas/es_usuario.policy";


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
    path:'inicio/gestion-usuarios',
    component :RutaGestionarUsuariosComponent,
    canActivate: [EstaLogeadoPolicy]
  },
  {
    path:'inicio/gestion-edificios',
    component :RutaGestionEdificiosComponent,
    canActivate: [EstaLogeadoPolicy,EsAdministradorPolicy]
  },
  {
    path:'inicio/gestion-departamentos',
    component :RutaGestionDepartamentosComponent,
    canActivate: [EstaLogeadoPolicy, EsAdministradorPolicy]
  },
  {
    path:'inicio/gestion-areas',
    component :RutaGestionAreasComponent,
    canActivate: [EstaLogeadoPolicy,EsAdministradorPolicy],
  },
  {
    path:'inicio/gestion-sensores',
    component :RutaGestionSensoresComponent,
    canActivate: [EstaLogeadoPolicy,EsAdministradorPolicy]
  },
  {
    path:'inicio/gestion-area-usuario',
    component :RutaSensorAreaUsuarioComponent,
    canActivate: [EstaLogeadoPolicy,EsAdministradorPolicy]
  },
  {
    path:'inicio/gestion-movimiento',
    component :RutaGestionMovimientoComponent,
    canActivate: [EstaLogeadoPolicy,EsAdministradorPolicy],
  },
  {
    path:'inicio/activar-notificacion',
    component :RutaActivarNotificacionComponent,
    canActivate: [EstaLogeadoPolicy,EsUsuarioPolicy],
  },
  {
    path:'inicio/consultar-notificacion',
    component :RutaRecibirNotificacionComponent,
    canActivate: [EstaLogeadoPolicy,EsUsuarioPolicy],
  },

  {
    path:'inicio/sensor-area-usuario',
    component :RutaSensorAreaUsuarioComponent,
    canActivate: [EstaLogeadoPolicy],
  },
  {
    path:'inicio/gestionar-usuarios',
    component :RutaGestionarUsuariosComponent,
    canActivate: [EstaLogeadoPolicy],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
