import { Component, OnInit } from '@angular/core';
import { FILAS } from 'src/app/constantes/numero-filas-por-tablas';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {ModalEditarEdificioComponent} from "../../modales/modal-editar-edificio/modal-editar-edificio.component";
import {EdificioRestService} from "../../services/rest/edificio-rest.service";

@Component({
  selector: 'app-ruta-gestion-edificios',
  templateUrl: './ruta-gestion-edificios.component.html',
  styleUrls: ['./ruta-gestion-edificios.component.scss']
})
export class RutaGestionEdificiosComponent implements OnInit {
url='http://localhost:1337';
edificios=[];
FILAS = FILAS;
nombreFiltrado="";
ubicacionFiltradp="";
estadoFiltrado="";
busquedaEdificio ='';

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly  _matDialog:MatDialog,
    private readonly  _edificioRestService: EdificioRestService,
  ) { }

  ngOnInit() {
    const urlEdificio = this.url + '/edificio';
    const edificios$ = this._httpClient.get(
      urlEdificio
    );
    edificios$
      .subscribe(
        (edificios: any[]) => { // TRY
          console.log('edificios: ', edificios);
          this.edificios = edificios;
        },
        (error) => { // CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando edificios'
          })
        }
      );

  }

  guardar() {
    console.log('guardando edificio');
    const matDialogRefModalEditarEdificio = this._matDialog
      .open(ModalEditarEdificioComponent,
        {width: '500px'}
      );
    const respuestaDialogo$ = matDialogRefModalEditarEdificio
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
    const edificioGuardado$ = this._edificioRestService
      .crear(datos);
    edificioGuardado$
      .subscribe(
        (edificioGuardado: any) => { // try
          console.log(edificioGuardado);
          const indice = this.edificios
            .findIndex(
              (edificio) => {
                return edificio.id === edificioGuardado.id;
              }
            );
          this.edificios.push(edificioGuardado);
        },
        (error) => { // catch
          console.error(error)
        }
      )
  }
  editar(edificio) {
    console.log('Editando edificio', edificio);
    const matDialogRefModalEditarEdificio = this._matDialog
      .open(
        ModalEditarEdificioComponent,
        {width: '500px', data: {edificio: edificio}}
      );
    const respuestaDialogo$ = matDialogRefModalEditarEdificio
      .afterClosed();

    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Datos', datos);
          if (datos) {
            console.log('id: ',edificio.id);
            this.editarEdificioHTTP(edificio.id, datos);
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
    const edificioEditado$ = this._edificioRestService.editar(id, datos);
    edificioEditado$
      .subscribe(
        (edificioEditado: any) => { // try
          console.log('ediProf HTTP', edificioEditado);
          const indice = this.edificios
            .findIndex(
              (edificio) => {
                return edificio.id === id;
              }
            );
          this.edificios[indice].nombre = datos.nombre;
          this.edificios[indice].ubicacion = datos.ubicacion;
          this.edificios[indice].estado = datos.estado;
        },
        (error) => { // catch
          console.error('error en el subscribe', error)
        }
      )
  }
  eliminar(edificio) {
    console.log('Eliminando edificio', edificio);

    const eliminar$ = this._edificioRestService
      .eliminar(edificio.id);

    eliminar$
      .subscribe( edificioEliminado=> {
          console.log('edificio eliminado',edificioEliminado);
          const indice = this.edificios
            .findIndex(
              (edificioBuscado) => {
                return edificioBuscado.id === edificio.id;
              }
            );
          this.edificios.splice(indice, 1);

        },
        (error) => {
          console.error(error);
        }
      )
  }
  buscarEdificioPorNombre()
  {
    const busqueda$ = this._edificioRestService
      .buscar(this.busquedaEdificio);
    busqueda$
      .subscribe( edificios=> {
          this.edificios = edificios;
        },
        (error) => {
          console.error(error);
        }
      )
  }
  edificiosFiltrados() {
    return this.edificios
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
