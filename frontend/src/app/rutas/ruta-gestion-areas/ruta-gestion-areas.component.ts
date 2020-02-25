import { Component, OnInit } from '@angular/core';
import { FILAS } from 'src/app/constantes/numero-filas-por-tablas';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {AreaRestService} from "../../services/rest/area-rest.service";
import {ModalEditarAreaComponent} from "../../modales/modal-editar-area/modal-editar-area.component";

@Component({
  selector: 'app-ruta-gestion-areas',
  templateUrl: './ruta-gestion-areas.component.html',
  styleUrls: ['./ruta-gestion-areas.component.scss']
})
export class RutaGestionAreasComponent implements OnInit {
  url='http://localhost:1337';
  areas=[];
  FILAS = FILAS;
  nombreFiltrado="";
  descripcionFiltrado="";
  estadoFiltrado="";
  busquedaArea ='';
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly  _matDialog:MatDialog,
    private readonly  _areaRestService: AreaRestService,
  ) { }

  ngOnInit() {
    const urlArea = this.url + '/area';
    const areas$ = this._httpClient.get(
      urlArea
    );
    areas$
      .subscribe(
        (areas: any[]) => { // TRY
          console.log('areas: ', areas);
          this.areas = areas;
        },
        (error) => { // CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando areas'
          })
        }
      );

  }

  guardar() {
    console.log('guardando areas');
    const matDialogRefModalEditarArea = this._matDialog
      .open(ModalEditarAreaComponent,
        {width: '500px'}
      );
    const respuestaDialogo$ = matDialogRefModalEditarArea
      .afterClosed();

    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Datos respuesta guardar cerrar popup', datos);
          if (datos) {
            this.guardarAreaHTTP(datos);
          } else {
            // undefined
          }
        },
        (error) => { // catch
          console.log('Error', error);
        }
      );
  }
  guardarAreaHTTP(datos) {
    const areaGuardado$ = this._areaRestService
      .crear(datos);
    areaGuardado$
      .subscribe(
        (areaGuardado: any) => { // try
          console.log(areaGuardado);
          const indice = this.areas
            .findIndex(
              (area) => {
                return area.id === areaGuardado.id;
              }
            );
          this.areas.push(areaGuardado);
        },
        (error) => { // catch
          console.error(error)
        }
      )
  }
  editar(area) {
    console.log('Editando area', area);
    const matDialogRefModalEditarArea = this._matDialog
      .open(
        ModalEditarAreaComponent,
        {width: '500px', data: {area: area}}
      );
    const respuestaDialogo$ = matDialogRefModalEditarArea
      .afterClosed();

    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Datos', datos);
          if (datos) {
            console.log('id: ',area.id);
            this.editarAreaHTTP(area.id, datos);
          } else {
            // undefined
          }
        },
        (error) => { // catch
          console.log('Error', error);
        }
      );
  }
  editarAreaHTTP(id: number, datos) {
    const areaEditado$ = this._areaRestService.editar(id, datos);
    areaEditado$
      .subscribe(
        (areaEditado: any) => { // try
          console.log('ediArea HTTP', areaEditado);
          const indice = this.areas
            .findIndex(
              (area) => {
                return area.id === id;
              }
            );
          console.log('datos siiii ', datos);
          console.log('areasn antes de actualizar: ', this.areas[2]);
          this.areas[indice].nombre = datos.nombre;
          this.areas[indice].descripcion = datos.descripcion;
          this.areas[indice].estado = datos.estado;
          this.areas[indice].idEdificio = datos.idEdificio;
          this.areas[indice].idDepartamento = datos.idDepartamento;

          console.log('areasn despuese de actualizar: ', this.areas[2]);

        },
        (error) => { // catch
          console.error('error en el subscribe', error)
        }
      )
  }
  eliminar(area) {
    console.log('Eliminando area', area);

    const eliminar$ = this._areaRestService
      .eliminar(area.id);

    eliminar$
      .subscribe( areaEliminado=> {
          console.log('area eliminado',areaEliminado);
          const indice = this.areas
            .findIndex(
              (areaBuscado) => {
                return areaBuscado.id === area.id;
              }
            );
          this.areas.splice(indice, 1);

        },
        (error) => {
          console.error(error);
        }
      )
  }
  buscarAreaPorNombre()
  {
    const busqueda$ = this._areaRestService
      .buscar(this.busquedaArea);
    busqueda$
      .subscribe( areas=> {
          this.areas = areas;
        },
        (error) => {
          console.error(error);
        }
      )
  }
  areasFiltrados() {
    return this.areas
      .filter(
        (area) => {
          return area.nombre.toLowerCase().includes(this.nombreFiltrado.toLowerCase());
        }
      )
      .filter(
        (area) => {
          return area.descripcion.toLowerCase().includes(this.descripcionFiltrado.toLowerCase());
        }
      )


      ;
  }

}
