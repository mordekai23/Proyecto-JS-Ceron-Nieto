import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaGestionarUsuariosComponent } from './rutas/ruta-gestionar-usuarios/ruta-gestionar-usuarios.component';
import { RutaAdministrarPisosComponent } from './rutas/ruta-administrar-pisos/ruta-administrar-pisos.component';
import { RutaAdministrarSensoresComponent } from './rutas/ruta-administrar-sensores/ruta-administrar-sensores.component';
import { RutaSensorAreaUsuarioComponent } from './rutas/ruta-sensor-area-usuario/ruta-sensor-area-usuario.component';
import { RutaGestionEdificiosComponent } from './rutas/ruta-gestion-edificios/ruta-gestion-edificios.component';
import { RutaGestionAreasComponent } from './rutas/ruta-gestion-areas/ruta-gestion-areas.component';
import { RutaGestionSensorAreaComponent } from './rutas/ruta-gestion-sensor-area/ruta-gestion-sensor-area.component';
import { ModalEditarEdificioComponent } from './modales/modal-editar-edificio/modal-editar-edificio.component';
import { ModalEditarAreaComponent } from './modales/modal-editar-area/modal-editar-area.component';
import { ModalEditarSensorAreaComponent } from './modales/modal-editar-sensor-area/modal-editar-sensor-area.component';
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
import {SensorAreaRestService} from "./services/rest/sensorArea-rest.service";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldControl} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaGestionarUsuariosComponent,
    RutaAdministrarPisosComponent,
    RutaAdministrarSensoresComponent,
    RutaSensorAreaUsuarioComponent,
    RutaGestionEdificiosComponent,
    RutaGestionAreasComponent,
    RutaGestionSensorAreaComponent,
    ModalEditarEdificioComponent,
    ModalEditarAreaComponent,
    ModalEditarSensorAreaComponent,
    RutaGestionMovimientoComponent
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
  ],
  entryComponents: [
    ModalEditarEdificioComponent,
    ModalEditarAreaComponent,
    ModalEditarSensorAreaComponent,
  ],

  providers: [
    EdificioRestService,
    AreaRestService,
    MovimientoRestService,
    SensorAreaRestService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
