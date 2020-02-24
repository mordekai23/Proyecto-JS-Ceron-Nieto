import { Component, OnInit } from '@angular/core';
import { FILAS } from 'src/app/constantes/numero-filas-por-tablas';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {DepartamentoRestService} from "../../services/rest/departamento-rest.service";
import {ModalEditarDepartamentoComponent} from "../../modales/modal-editar-departamento/modal-editar-departamento.component";

@Component({
  selector: 'app-ruta-gestion-departamentos',
  templateUrl: './ruta-gestion-departamentos.component.html',
  styleUrls: ['./ruta-gestion-departamentos.component.scss']
})
export class RutaGestionDepartamentosComponent implements OnInit {
  url='http://localhost:1337';
  departamentos=[];
  FILAS = FILAS;
  numeroDepartamentoFiltrado="";
  descripcionFiltrado="";
  estadoFiltrado="";
  busquedaEntidad ='';
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly  _matDialog:MatDialog,
    private readonly  _departamentoRestService: DepartamentoRestService,
  ) { }

  ngOnInit() {
    const urlGestion = this.url + '/departamento';
    const respuestaConsulta$ = this._httpClient.get(
      urlGestion
    );
    respuestaConsulta$
      .subscribe(
        (datos: any[]) => { // TRY
          console.log('departamentos: ', datos);
          this.departamentos = datos;
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
    const entidadGuardada$ = this._departamentoRestService
      .crear(datos);
    entidadGuardada$
      .subscribe(
        (datoGuardado: any) => { // try
          console.log(datoGuardado);
          const indice = this.departamentos
            .findIndex(
              (entidad) => {
                return entidad.id === datoGuardado.id;
              }
            );
          this.departamentos.push(datoGuardado);
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
        {width: '500px', data: {departamento: entidad}}
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
    const entidadEditada$ = this._departamentoRestService.editar(id, datos);
    entidadEditada$
      .subscribe(
        (datoEditada: any) => { // try
          console.log('ediProf HTTP', datoEditada);
          const indice = this.departamentos
            .findIndex(
              (edificio) => {
                return edificio.id === id;
              }
            );
          this.departamentos[indice].numeroDeDepartamento = datos.numeroDeDepartamento;
          this.departamentos[indice].descripcion = datos.descripcion;
          this.departamentos[indice].estado = datos.estado;
          this.departamentos[indice].idEdicicio= datos.idEdificio;
        },
        (error) => { // catch
          console.error('error en el subscribe', error)
        }
      )
  }
  eliminar(entidad) {
    console.log('Eliminando entidad', entidad);

    const eliminar$ = this._departamentoRestService
      .eliminar(entidad.id);

    eliminar$
      .subscribe( entidadEliminada=> {
          console.log('edificio eliminado',entidadEliminada);
          const indice = this.departamentos
            .findIndex(
              (entidadBuscada) => {
                return entidadBuscada.id === entidad.id;
              }
            );
          this.departamentos.splice(indice, 1);

        },
        (error) => {
          console.error(error);
        }
      )
  }
  buscarEdificioPorNombre()
  {
    const busqueda$ = this._departamentoRestService
      .buscar(this.busquedaEntidad);
    busqueda$
      .subscribe( datos=> {
          this.departamentos = datos;
        },
        (error) => {
          console.error(error);
        }
      )
  }
  edificiosFiltrados() {
    return this.departamentos
      .filter(
        (entidad) => {
          return entidad.descripcion.toLowerCase().includes(this.descripcionFiltrado.toLowerCase());
        }
      )


      ;
  }

}
