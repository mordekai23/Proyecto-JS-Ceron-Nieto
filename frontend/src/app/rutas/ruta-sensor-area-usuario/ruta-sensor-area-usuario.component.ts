import { Component, OnInit } from '@angular/core';
import { FILAS } from 'src/app/constantes/numero-filas-por-tablas';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {AreaUsuarioRestService} from "../../services/rest/areaUsuario-rest.service";
import {ModalEditarAreaUsuarioComponent} from "../../modales/modal-editar-area-usuario/modal-editar-area-usuario.component";

@Component({
  selector: 'app-ruta-sensor-area-usuario',
  templateUrl: './ruta-sensor-area-usuario.component.html',
  styleUrls: ['./ruta-sensor-area-usuario.component.scss']
})
export class RutaSensorAreaUsuarioComponent implements OnInit {
  url = 'http://localhost:1337';
  areaUsuarios = [];
  FILAS = FILAS;
  nombreFiltrado = '';
  apellidoFiltrado = '';
  correoElectronicoFiltrado = '';
  busquedaUsuario = '';
  rolFiltrado = '';
  idUsuario="";
  usuarios=[];

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _matDialog: MatDialog,
    private readonly _areaUsuarioRestService: AreaUsuarioRestService
  ) {
  }

  ngOnInit() {
    const urlUsuarios = this.url + '/usuario';
    // $ -> Observable
    const usuarios$ = this._httpClient.get(
      urlUsuarios
    );
    usuarios$
      .subscribe(
        (usuarios: any[]) => { // TRY
          console.log('Usuarios: ', usuarios);
          this.usuarios = usuarios;
        },
        (error) => { // CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando usuarios'
          })
        }
      );
  }

  guardar(usuario) {
    console.log('guardar area usuario');
    this.idUsuario=usuario.id;
    const matDialogRefModalEditarUsuario = this._matDialog
      .open(
        ModalEditarAreaUsuarioComponent,
        {width: '500px'}
      );
    const respuestaDialogo$ = matDialogRefModalEditarUsuario
      .afterClosed();

    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Datos respuesta guardar cerrar popup', datos);
          if (datos) {
            this.guardarUsuarioHTTP(datos);
          } else {
            // undefined
          }
        },
        (error) => { // catch
          console.log('Error', error);
        }
      );
  }

  guardarUsuarioHTTP(datos) {
    var areaUsuarioObjeto = {
      idUsuario : "",
      idArea: "",
      enviarNotificacion : "S",
      idDepartamento:0,
      idEdificio:0,
    };
    console.log("datos e el http: ", datos);
    for(let i=0;i < datos.listaAreaSelecionada.length ;i++) {
      areaUsuarioObjeto.idUsuario=this.idUsuario;
      areaUsuarioObjeto.idArea=datos.listaAreaSelecionada[i];
      areaUsuarioObjeto.enviarNotificacion="S";
      areaUsuarioObjeto.idEdificio =datos.idEdificio;
      areaUsuarioObjeto.idDepartamento = datos.idDepartamento;
      const usuarioGuardado$ = this._areaUsuarioRestService.crear(areaUsuarioObjeto);
      usuarioGuardado$
        .subscribe(
          (usuarioGuardado: any) => {
            console.log(usuarioGuardado);
            this.areaUsuarios.push(usuarioGuardado);
            console.log("usuariosareas: ", this.areaUsuarios);
          },
          (error) => { // catch
            console.error(error)
          }
        )
    }
  }

  editar(usuario) {

    console.log('Editando usuario', usuario);
    console.log('lista area usuario', this.areaUsuarios);

    const matDialogRefModalEditarUsuario = this._matDialog
      .open(
        ModalEditarAreaUsuarioComponent, //data: {usuario}
        {width: '500px', data: {usuario: usuario}}
      );
    const respuestaDialogo$ = matDialogRefModalEditarUsuario
      .afterClosed();

    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Datos', datos);
          console.log('usuario', usuario);
          if (datos) {
            //this.editarUsuarioHTTP(usuario.id, datos);
          } else {
          }
        },
        (error) => { // catch
          console.log('Error', error);
        }
      );
  }

  editarUsuarioHTTP(id: number, datos) {
    var areaUsuarioObjeto = {
      idUsuario : "",
      idArea: "",
      enviarNotificacion : "S",
      idDepartamento:0,
      idEdificio:0,
    };
    console.log("datos e el http: ", datos);
    for(let i=0;i < datos.listaAreaSelecionada.length ;i++) {
      areaUsuarioObjeto.idUsuario = this.idUsuario;
      areaUsuarioObjeto.idArea = datos.listaAreaSelecionada[i];
      areaUsuarioObjeto.enviarNotificacion = "S";
      areaUsuarioObjeto.idEdificio = datos.idEdificio;
      areaUsuarioObjeto.idDepartamento = datos.idDepartamento;

      const usuarioEditado$ = this._areaUsuarioRestService.editar(id, areaUsuarioObjeto);
      usuarioEditado$
        .subscribe(
          (usuarioEditado: any) => { // try
            console.log('usuario editado', usuarioEditado);
            const indice = this.areaUsuarios
              .findIndex(
                (usuario) => {
                  return usuario.id === id;
                }
              );
            this.areaUsuarios[indice].nombre = datos.nombre;
            this.areaUsuarios[indice].apellido = datos.apellido;
            this.areaUsuarios[indice].correoElectronico = datos.correoElectronico;
            this.areaUsuarios[indice].password = datos.password;
            this.areaUsuarios[indice].rol = datos.rol;

          },
          (error) => { // catch
            console.error(error)
          }
        )
    }
  }
  buscarUsuarioPorNombre() {
    const busqueda$ = this._areaUsuarioRestService
      .buscar(this.busquedaUsuario);
    busqueda$
      .subscribe(usuarios => {
          this.areaUsuarios = usuarios;
        },
        (error) => {
          console.error(error);
        }
      )
  }
  usuariosFiltrados() {
    return this.usuarios
      .filter(
        (usuario) => {
          return usuario.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase());
        }
      )
      .filter(
        (usuario) => {
          return usuario.apellido.toLowerCase().includes(this.apellidoFiltrado.toLowerCase());
        }
      )
      .filter(
        (usuario) => {
          return usuario.correoElectronico.toLowerCase().includes(this.correoElectronicoFiltrado.toLowerCase());
        }
      )
      .filter(
        (usuario) => {
          return usuario.rol.toLowerCase().includes(this.rolFiltrado.toLowerCase());
        }
      );
  }
}
