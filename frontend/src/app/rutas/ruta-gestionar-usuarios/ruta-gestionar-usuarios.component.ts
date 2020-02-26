import { Component, OnInit } from '@angular/core';
import { FILAS } from 'src/app/constantes/numero-filas-por-tablas';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {UsuarioRestService} from "../../services/rest/usuario_rest.service";
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

  url = 'http://localhost:1337';
  usuarios = [];
  FILAS = FILAS;
  nombreFiltrado = '';
  apellidoFiltrado = '';
  correoElectronicoFiltrado = '';
  busquedaUsuario ='';
  rolFiltrado='';

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _matDialog: MatDialog,
    private readonly _usuarioRestService: UsuarioRestService
  ) { }

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

  guardar() {
    console.log('guardando usuario');
    const matDialogRefModalEditarUsuario = this._matDialog
      .open(
        ModalEditarUsuarioComponent,
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
    const usuarioGuardado$ = this._usuarioRestService
      .crear(datos);
    usuarioGuardado$
      .subscribe(
        (usuarioGuardado: any) => { // try
          console.log(usuarioGuardado);
          const indice = this.usuarios
            .findIndex(
              (usuario) => {
                return usuario.id === usuarioGuardado.id;
              }
            );
          this.usuarios.push(usuarioGuardado);
          //console.log('usuarios luego de guardar el ultimo dato',this.usuarios)
        },
        (error) => { // catch
          console.error(error)
        }
      )
  }
  editar(usuario) {
    console.log('Editando usuario', usuario);
    const matDialogRefModalEditarUsuario = this._matDialog
      .open(
        ModalEditarUsuarioComponent,
        {width: '500px', data: {usuario}}
      );
    const respuestaDialogo$ = matDialogRefModalEditarUsuario
      .afterClosed();

    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Datos', datos);
          console.log('usuario', usuario);
          if (datos) {
            this.editarUsuarioHTTP(usuario.id, datos);
          } else {
          }
        },
        (error) => { // catch
          console.log('Error', error);
        }
      );
  }
  editarUsuarioHTTP(id: number, datos) {
    const usuarioEditado$ = this._usuarioRestService.editar(id, datos);
    usuarioEditado$
      .subscribe(
        (usuarioEditado: any) => { // try
          console.log('usuario editado',usuarioEditado);
          const indice = this.usuarios
            .findIndex(
              (usuario) => {
                return usuario.id === id;
              }
            );
          this.usuarios[indice].nombre = datos.nombre;
          this.usuarios[indice].apellido = datos.apellido;
          this.usuarios[indice].correoElectronico = datos.correoElectronico;
          this.usuarios[indice].password = datos.password;
          this.usuarios[indice].rol = datos.rol;

        },
        (error) => { // catch
          console.error(error)
        }
      )
  }
  eliminar(usuario) {
    console.log('Eliminando usuario', usuario);

    const eliminar$ = this._usuarioRestService
      .eliminar(usuario.id);

    eliminar$
      .subscribe( usuarioEliminado=> {
          console.log(usuarioEliminado);
          //indice eliminar del frondend del arrays de usuarios
          //eliminarlo del array usuarios.
          const indice = this.usuarios
            .findIndex(
              (usuarioBuscado) => {
                return usuarioBuscado.id === usuario.id;
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
      .subscribe( usuarios=> {
          this.usuarios = usuarios;
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
