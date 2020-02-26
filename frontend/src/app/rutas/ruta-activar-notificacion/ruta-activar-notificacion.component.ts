import { Component, OnInit } from '@angular/core';
import {AuthServices} from "../../services/auth/authService";
import {ModalEditarAreaUsuarioComponent} from "../../modales/modal-editar-area-usuario/modal-editar-area-usuario.component";
import {AreaUsuarioRestService} from "../../services/rest/areaUsuario-rest.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

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
url = 'http://localhost:1337';
areaUsuarios=[];
  areaUsuariosDato=[];
notificacion="";

  constructor(
    private readonly _authService:AuthServices,
    private readonly _httpClient: HttpClient,
    private readonly _areaUsuarioRestService: AreaUsuarioRestService,
    private router:Router,
  ) { }

  ngOnInit()
  {
    console.log('session:' ,this._authService.sesion);
    this.idUsuario =this._authService.sesion.id;
    this.nombre =this._authService.sesion.nombre;
    this.apellido =this._authService.sesion.apellido;
    this.correoElectronico =this._authService.sesion.correoElectronico;

    const urlAreaUsuarios = this.url + '/areaUsuario?idUsuario='+this.idUsuario;
    const areaUsuarios = this._httpClient.get(urlAreaUsuarios);
    areaUsuarios
      .subscribe(
        (areaUsuarios: any[]) => {
          this.areaUsuariosDato = areaUsuarios;
          if (this.areaUsuariosDato[0].enviarNotificacion ==="S") {
            this.checked = true;
          }

        },
        (error) => {
          console.error({
            error: error,
            mensaje: 'Error consultando area usuarios'
          })
        }
      );
  }

  activar()
  {
    console.log(this.checked);
    if(this.checked) {
      this.notificacion="S";
    }
    else {
      this.notificacion="N";
    }
    this.editar();
  }
  editar() {
    const urlAreaUsuarios = this.url + '/areaUsuario?idUsuario='+this.idUsuario;
    const areaUsuarios = this._httpClient.get(urlAreaUsuarios);
    areaUsuarios
      .subscribe(
        (areaUsuarios: any[]) => {
          console.log('Area Usuarios: ', areaUsuarios);
          this.areaUsuarios = areaUsuarios;
          this.editareditarUsuarioHTTP();
        },
        (error) => {
          console.error({
            error: error,
            mensaje: 'Error consultando area usuarios'
          })
        }
      );
  }
editareditarUsuarioHTTP()
{
  var areaUsuarioObjeto = {
    idUsuario : "",
    idArea: "",
    enviarNotificacion : this.notificacion,
    idDepartamento:0,
    idEdificio:0,
  };
  for(let i=0;i < this.areaUsuarios.length; i++) {
    console.log('lengt',this.areaUsuarios.length);
    console.log('areausuario i',this.areaUsuarios[i]);

    areaUsuarioObjeto.idUsuario = this.idUsuario;
    areaUsuarioObjeto.idArea = this.areaUsuarios[i].idArea.id;
    areaUsuarioObjeto.enviarNotificacion = this.notificacion;
    areaUsuarioObjeto.idEdificio =  this.areaUsuarios[i].idEdificio;
    areaUsuarioObjeto.idDepartamento =  this.areaUsuarios[i].idDepartamento;

    const usuarioEditado$ = this._areaUsuarioRestService.editar(parseInt(this.areaUsuarios[i].id), areaUsuarioObjeto);
    usuarioEditado$
      .subscribe(
        (areaUsuarioEditado: any) => {
          console.log('area usuario editado', areaUsuarioEditado);
        },
        (error) => { // catch
          console.error(error)
        }
      )

  }
  alert("Datos guardados correctamente");
  this.router.navigate(['/inicio']);
}

}
