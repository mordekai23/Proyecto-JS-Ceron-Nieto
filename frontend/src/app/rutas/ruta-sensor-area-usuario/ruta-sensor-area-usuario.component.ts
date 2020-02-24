import { Component, OnInit } from '@angular/core';
import { FILAS } from 'src/app/constantes/numero-filas-por-tablas';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {EdificioRestService} from "../../services/rest/edificio-rest.service";
import {AreaUsuarioRestService} from "../../services/rest/areaUsuario-rest.service";
import {ModalEditarEdificioComponent} from "../../modales/modal-editar-edificio/modal-editar-edificio.component";
import {ModalEditarDepartamentoComponent} from "../../modales/modal-editar-departamento/modal-editar-departamento.component";

@Component({
  selector: 'app-ruta-sensor-area-usuario',
  templateUrl: './ruta-sensor-area-usuario.component.html',
  styleUrls: ['./ruta-sensor-area-usuario.component.scss']
})
export class RutaSensorAreaUsuarioComponent implements OnInit {
  url='http://localhost:1337';
  areasUsuarios=[];
  FILAS = FILAS;
  nombreFiltrado="";
  ubicacionFiltradp="";
  estadoFiltrado="";
  busquedaEntidad ='';
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly  _matDialog:MatDialog,
    private readonly  _areaUsuarioRestService: AreaUsuarioRestService,
  ) { }

  ngOnInit() {
    const urlGestion = this.url + '/departamento';
    const respuestaConsulta$ = this._httpClient.get(
      urlGestion
    );
    respuestaConsulta$
      .subscribe(
        (datos: any[]) => { // TRY
          console.log('edificios: ', datos);
          this.areasUsuarios = datos;
        },
        (error) => { // CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando datos'
          })
        }
      );
  }

  guardar() {
    console.log('guardando datos');
    const matDialogRefModalEditar = this._matDialog
      .open(ModalEditarDepartamentoComponent,
        {width: '500px'}
      );
    const respuestaDialogo$ = matDialogRefModalEditar
      .afterClosed();

    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Datos respuesta guardar cerrar popup', datos);
          if (datos) {
            this.guardarHTTP(datos);
          } else {
            // undefined
          }
        },
        (error) => { // catch
          console.log('Error', error);
        }
      );
  }
  guardarHTTP(datos) {
    const entidadGuardada$ = this._areaUsuarioRestService
      .crear(datos);
    entidadGuardada$
      .subscribe(
        (datoGuardado: any) => { // try
          console.log(datoGuardado);
          const indice = this.areasUsuarios
            .findIndex(
              (entidad) => {
                return entidad.id === datoGuardado.id;
              }
            );
          this.areasUsuarios.push(datoGuardado);
        },
        (error) => { // catch
          console.error(error)
        }
      )
  }
  editar(entidad) {
    console.log('Editando entidad', entidad);
    const matDialogRefModalEditar = this._matDialog
      .open(
        ModalEditarDepartamentoComponent,
        {width: '500px', data: {edificio: entidad}}
      );
    const respuestaDialogo$ = matDialogRefModalEditar
      .afterClosed();

    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Datos', datos);
          if (datos) {
            console.log('id: ',entidad.id);
            this.editarHTTP(entidad.id, datos);
          } else {
            // undefined
          }
        },
        (error) => { // catch
          console.log('Error', error);
        }
      );
  }
  editarHTTP(id: number, datos) {
    const entidadEditada$ = this._areaUsuarioRestService.editar(id, datos);
    entidadEditada$
      .subscribe(
        (datoEditada: any) => { // try
          console.log('ediProf HTTP', datoEditada);
          const indice = this.areasUsuarios
            .findIndex(
              (edificio) => {
                return edificio.id === id;
              }
            );
          this.areasUsuarios[indice].nombre = datos.nombre;
          this.areasUsuarios[indice].ubicacion = datos.ubicacion;
          this.areasUsuarios[indice].estado = datos.estado;
        },
        (error) => { // catch
          console.error('error en el subscribe', error)
        }
      )
  }
  eliminar(entidad) {
    console.log('Eliminando entidad', entidad);

    const eliminar$ = this._areaUsuarioRestService
      .eliminar(entidad.id);

    eliminar$
      .subscribe( entidadEliminada=> {
          console.log('edificio eliminado',entidadEliminada);
          const indice = this.areasUsuarios
            .findIndex(
              (entidadBuscada) => {
                return entidadBuscada.id === entidad.id;
              }
            );
          this.areasUsuarios.splice(indice, 1);

        },
        (error) => {
          console.error(error);
        }
      )
  }
  buscarEdificioPorNombre()
  {
    const busqueda$ = this._areaUsuarioRestService
      .buscar(this.busquedaEntidad);
    busqueda$
      .subscribe( datos=> {
          this.areasUsuarios = datos;
        },
        (error) => {
          console.error(error);
        }
      )
  }
  edificiosFiltrados() {
    return this.areasUsuarios
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
