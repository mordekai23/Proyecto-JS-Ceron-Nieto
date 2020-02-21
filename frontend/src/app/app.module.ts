import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaGestionarUsuariosComponent } from './rutas/ruta-gestionar-usuarios/ruta-gestionar-usuarios.component';
import { RutaAdministrarPisosComponent } from './rutas/ruta-administrar-pisos/ruta-administrar-pisos.component';
import { RutaAdministrarSensoresComponent } from './rutas/ruta-administrar-sensores/ruta-administrar-sensores.component';
import { RutaSensorAreaUsuarioComponent } from './rutas/ruta-sensor-area-usuario/ruta-sensor-area-usuario.component';
import { ModalEditarUsuarioComponent } from './modales/modal-editar-usuario/modal-editar-usuario.component';
import { RutaAdministrarDepartamentosComponent } from './rutas/ruta-administrar-departamentos/ruta-administrar-departamentos.component';
import { ModalEditarDepartamentoComponent } from './modales/modal-editar-departamento/modal-editar-departamento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaGestionarUsuariosComponent,
    RutaAdministrarPisosComponent,
    RutaAdministrarSensoresComponent,
    RutaSensorAreaUsuarioComponent,
    ModalEditarUsuarioComponent,
    RutaAdministrarDepartamentosComponent,
    ModalEditarDepartamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
