import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaGestionarUsuariosComponent } from './rutas/ruta-gestionar-usuarios/ruta-gestionar-usuarios.component';
import { RutaAdministrarPisosComponent } from './rutas/ruta-administrar-pisos/ruta-administrar-pisos.component';
import { RutaAdministrarSensoresComponent } from './rutas/ruta-administrar-sensores/ruta-administrar-sensores.component';
import { RutaSensorAreaUsuarioComponent } from './rutas/ruta-sensor-area-usuario/ruta-sensor-area-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaGestionarUsuariosComponent,
    RutaAdministrarPisosComponent,
    RutaAdministrarSensoresComponent,
    RutaSensorAreaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
