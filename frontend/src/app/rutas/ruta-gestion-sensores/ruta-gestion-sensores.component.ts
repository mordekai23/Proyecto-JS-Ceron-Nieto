import { Component, OnInit } from '@angular/core';
import { FILAS } from 'src/app/constantes/numero-filas-por-tablas';
import {SensorRestService} from "../../services/rest/sensor_rest.service";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {ModalEditarSensorComponent} from "../../modales/modal-editar-sensor/modal-editar-sensor.component";

@Component({
  selector: 'app-ruta-gestion-sensores',
  templateUrl: './ruta-gestion-sensores.component.html',
  styleUrls: ['./ruta-gestion-sensores.component.scss']
})
export class RutaGestionSensoresComponent implements OnInit {
  url='http://localhost:1337';
  sensores=[];
  FILAS = FILAS;
  nombreFiltrado="";
  codigoInternoFiltrado="";
  busquedaEntidad ='';
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly  _matDialog:MatDialog,
    private readonly  _sensorRestService: SensorRestService,
  ) { }

  ngOnInit() {
    const urlGestion = this.url + '/sensor';
    const respuestaConsulta$ = this._httpClient.get(
      urlGestion
    );
    respuestaConsulta$
      .subscribe(
        (datos: any[]) => { // TRY
          console.log('sensores: ', datos);
          this.sensores = datos;
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
      .open(ModalEditarSensorComponent,
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
    const entidadGuardada$ = this._sensorRestService
      .crear(datos);
    entidadGuardada$
      .subscribe(
        (datoGuardado: any) => { // try
          console.log(datoGuardado);
          const indice = this.sensores
            .findIndex(
              (entidad) => {
                return entidad.id === datoGuardado.id;
              }
            );
          this.sensores.push(datoGuardado);
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
        ModalEditarSensorComponent,
        {width: '500px', data: {sensor: entidad}}
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
    const entidadEditada$ = this._sensorRestService.editar(id, datos);
    entidadEditada$
      .subscribe(
        (datoEditada: any) => { // try
          console.log('ediProf HTTP', datoEditada);
          const indice = this.sensores
            .findIndex(
              (sensor) => {
                return sensor.id === id;
              }
            );
          this.sensores[indice].codigoInterno = datos.codigoInterno;
          this.sensores[indice].nombre = datos.nombre;
          this.sensores[indice].idEdificio= datos.idEdificio;
          this.sensores[indice].idDepartamento= datos.idDepartamento;
          this.sensores[indice].idArea = datos.idArea;
        },
        (error) => { // catch
          console.error('error en el subscribe', error)
        }
      )
  }
  eliminar(entidad) {
    console.log('Eliminando entidad', entidad);

    const eliminar$ = this._sensorRestService
      .eliminar(entidad.id);

    eliminar$
      .subscribe( entidadEliminada=> {
          console.log('edificio eliminado',entidadEliminada);
          const indice = this.sensores
            .findIndex(
              (entidadBuscada) => {
                return entidadBuscada.id === entidad.id;
              }
            );
          this.sensores.splice(indice, 1);

        },
        (error) => {
          console.error(error);
        }
      )
  }
  buscarEdificioPorNombre()
  {
    const busqueda$ = this._sensorRestService
      .buscar(this.busquedaEntidad);
    busqueda$
      .subscribe( datos=> {
          this.sensores = datos;
        },
        (error) => {
          console.error(error);
        }
      )
  }
  edificiosFiltrados() {
    return this.sensores
      .filter(
        (entidad) => {
          return entidad.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase());
        }
      )
      .filter(
        (entidad) => {
          return entidad.codigoInterno.toLowerCase().includes(this.codigoInternoFiltrado.toLowerCase());
        }
      )

      ;
  }

}
