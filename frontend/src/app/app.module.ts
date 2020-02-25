import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaGestionarUsuariosComponent } from './rutas/ruta-gestionar-usuarios/ruta-gestionar-usuarios.component';
import { RutaSensorAreaUsuarioComponent } from './rutas/ruta-sensor-area-usuario/ruta-sensor-area-usuario.component';
import { RutaGestionEdificiosComponent } from './rutas/ruta-gestion-edificios/ruta-gestion-edificios.component';
import { RutaGestionAreasComponent } from './rutas/ruta-gestion-areas/ruta-gestion-areas.component';
import { ModalEditarEdificioComponent } from './modales/modal-editar-edificio/modal-editar-edificio.component';
import { ModalEditarAreaComponent } from './modales/modal-editar-area/modal-editar-area.component';
import { RutaGestionMovimientoComponent } from './rutas/ruta-gestion-movimiento/ruta-gestion-movimiento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ButtonModule, TableModule} from "primeng";
import {EdificioRestService} from "./services/rest/edificio-rest.service";
import {AreaRestService} from "./services/rest/area-rest.service";
import {MovimientoRestService} from "./services/rest/movimiento-rest.service";
import {HttpClientModule} from "@angular/common/http";
import {ModalEditarDepartamentoComponent} from "./modales/modal-editar-departamento/modal-editar-departamento.component";
import {ModalEditarUsuarioComponent} from "./modales/modal-editar-usuario/modal-editar-usuario.component";
import {AuthServices} from "./services/auth/authService";
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { ModalEditarSensorComponent } from './modales/modal-editar-sensor/modal-editar-sensor.component';
import {RutaGestionDepartamentosComponent} from "./rutas/ruta-gestion-departamentos/ruta-gestion-departamentos.component";
import { RutaGestionSensoresComponent } from './rutas/ruta-gestion-sensores/ruta-gestion-sensores.component';
import {DepartamentoRestService} from "./services/rest/departamento-rest.service";
import {SensorRestService} from "./services/rest/sensor_rest.service";
import {AreaUsuarioRestService} from "./services/rest/areaUsuario-rest.service";
import {UsuarioRestService} from "./services/rest/usuario_rest.service";
import {PickListModule} from 'primeng/picklist';
import {MatListModule} from "@angular/material/list";
import { ModalEditarAreaUsuarioComponent } from './modales/modal-editar-area-usuario/modal-editar-area-usuario.component';
import { RutaActivarNotificacionComponent } from './rutas/ruta-activar-notificacion/ruta-activar-notificacion.component';
import { RutaRecibirNotificacionComponent } from './rutas/ruta-recibir-notificacion/ruta-recibir-notificacion.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaGestionarUsuariosComponent,
    RutaSensorAreaUsuarioComponent,
    RutaGestionEdificiosComponent,
    RutaGestionAreasComponent,
    RutaGestionMovimientoComponent,
    RutaGestionDepartamentosComponent,
    ModalEditarAreaComponent,
    ModalEditarDepartamentoComponent,
    ModalEditarEdificioComponent,
    ModalEditarUsuarioComponent,
    RutaInicioComponent,
    ModalEditarSensorComponent,
    RutaGestionSensoresComponent,
    ModalEditarAreaUsuarioComponent,
    RutaActivarNotificacionComponent,
    RutaRecibirNotificacionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatCheckboxModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    PickListModule,
    MatListModule,
    MatSlideToggleModule,

  ],
  entryComponents: [
    ModalEditarEdificioComponent,
    ModalEditarAreaComponent,
    ModalEditarDepartamentoComponent,
    ModalEditarUsuarioComponent,
    ModalEditarSensorComponent,
    ModalEditarUsuarioComponent,
    ModalEditarAreaUsuarioComponent,
  ],

  providers: [
    EdificioRestService,
    AreaRestService,
    MovimientoRestService,
    DepartamentoRestService,
    SensorRestService,
    AreaUsuarioRestService,
    UsuarioRestService,
    AuthServices,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
