import { Component, OnInit } from '@angular/core';
import {AuthServices} from "../../services/auth/authService";

@Component({
  selector: 'app-ruta-activar-notificacion',
  templateUrl: './ruta-activar-notificacion.component.html',
  styleUrls: ['./ruta-activar-notificacion.component.scss']
})
export class RutaActivarNotificacionComponent implements OnInit {
nombre="";
apellido="";
correoElectronico="";
idUsuario="";
checked=false;
  constructor(
    private readonly _authService:AuthServices,
  ) { }

  ngOnInit() {
console.log('session:' ,this._authService.sesion);
    this.idUsuario =this._authService.sesion.id;
    this.nombre =this._authService.sesion.nombre;
    this.apellido =this._authService.sesion.apellido;
    this.correoElectronico =this._authService.sesion.correoElectronico;
  }

  activar()
  {
console.log(this.checked);
  }

}
