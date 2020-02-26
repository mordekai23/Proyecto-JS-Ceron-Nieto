import { Component, OnInit } from '@angular/core';
import { FILAS } from 'src/app/constantes/numero-filas-por-tablas';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {UsuarioRestService} from "../../services/rest/usuario-rest.service";
import {ModalEditarUsuarioComponent} from "../../modales/modal-editar-usuario/modal-editar-usuario.component";

@Component({
  selector: 'app-ruta-gestionar-usuarios',
  templateUrl: './ruta-gestionar-usuarios.component.html',
  styleUrls: ['./ruta-gestionar-usuarios.component.scss']
})
export class RutaGestionarUsuariosComponent implements OnInit {
  url='http://localhost:1337';
  usuarios=[];
  FILAS = FILAS;
  nombreFiltrado="";
  ubicacionFiltradp="";
  estadoFiltrado="";
  busquedaUsuario ='';

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly  _matDialog:MatDialog,
    private readonly  _usuarioRestService: UsuarioRestService,
  ) { }

  ngOnInit() {
    const urlUsuario = this.url + '/usuario';
    const usuarios$ = this._httpClient.get(
      urlUsuario
    );
    usuarios$
      .subscribe(
        (usuarios: any[]) => { // TRY
          console.log('usuarios: ', usuarios);
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

  guardar() {
    console.log('guardando usuario');
    const matDialogRefModalEditarUsuario = this._matDialog
      .open(ModalEditarUsuarioComponent,
        {width: '500px'}
      );
    const respuestaDialogo$ = matDialogRefModalEditarUsuario
      .afterClosed();

    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Datos respuesta guardar cerrar popup', datos);
          if (datos) {
            this.guardarEdificioHTTP(datos);
          } else {
            // undefined
          }
        },
        (error) => { // catch
          console.log('Error', error);
        }
      );
  }
  guardarEdificioHTTP(datos) {
    const usuarioGuardado$ = this._usuarioRestService
      .crear(datos);
    usuarioGuardado$
      .subscribe(
        (edificioGuardado: any) => { // try
          console.log(edificioGuardado);
          const indice = this.usuarios
            .findIndex(
              (edificio) => {
                return edificio.id === edificioGuardado.id;
              }
            );
          this.usuarios.push(edificioGuardado);
        },
        (error) => { // catch
          console.error(error)
        }
      )
  }
  editar(usuario) {
    console.log('Editando usuario', usuario);
    const matDialogRefModalEditarEdificio = this._matDialog
      .open(
        ModalEditarUsuarioComponent,
        {width: '500px', data: {edificio: usuario}}
      );
    const respuestaDialogo$ = matDialogRefModalEditarEdificio
      .afterClosed();

    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Datos', datos);
          if (datos) {
            console.log('id: ',usuario.id);
            this.editarEdificioHTTP(usuario.id, datos);
          } else {
            // undefined
          }
        },
        (error) => { // catch
          console.log('Error', error);
        }
      );
  }
  editarEdificioHTTP(id: number, datos) {
    const edificioEditado$ = this._usuarioRestService.editar(id, datos);
    edificioEditado$
      .subscribe(
        (edificioEditado: any) => { // try
          console.log('ediProf HTTP', edificioEditado);
          const indice = this.usuarios
            .findIndex(
              (edificio) => {
                return edificio.id === id;
              }
            );
          this.usuarios[indice].nombre = datos.nombre;
          this.usuarios[indice].ubicacion = datos.ubicacion;
          this.usuarios[indice].estado = datos.estado;
        },
        (error) => { // catch
          console.error('error en el subscribe', error)
        }
      )
  }
  eliminar(edificio) {
    console.log('Eliminando edificio', edificio);

    const eliminar$ = this._usuarioRestService
      .eliminar(edificio.id);

    eliminar$
      .subscribe( edificioEliminado=> {
          console.log('edificio eliminado',edificioEliminado);
          const indice = this.usuarios
            .findIndex(
              (edificioBuscado) => {
                return edificioBuscado.id === edificio.id;
              }
            );
          this.usuarios.splice(indice, 1);

        },
        (error) => {
          console.error(error);
        }
      )
  }
  buscarUsuarioPorNombre()
  {
    const busqueda$ = this._usuarioRestService
      .buscar(this.busquedaUsuario);
    busqueda$
      .subscribe( edificios=> {
          this.usuarios = edificios;
        },
        (error) => {
          console.error(error);
        }
      )
  }
  usuariosFiltrados() {
    return this.usuarios
      .filter(
        (edificio) => {
          return edificio.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase());
        }
      )
      .filter(
        (edificio) => {
          return edificio.ubicacion.toLowerCase().includes(this.ubicacionFiltradp.toLowerCase());
        }
      )

      ;
  }
}
