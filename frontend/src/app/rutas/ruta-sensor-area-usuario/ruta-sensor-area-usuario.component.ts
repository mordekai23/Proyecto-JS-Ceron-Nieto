import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-sensor-area-usuario',
  templateUrl: './ruta-sensor-area-usuario.component.html',
  styleUrls: ['./ruta-sensor-area-usuario.component.scss']
})
export class RutaSensorAreaUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
=======
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
      enviarNotificacion : "AC",
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
>>>>>>> parent of cebea6d... update- recibir notificacion- politicas
  }

}
