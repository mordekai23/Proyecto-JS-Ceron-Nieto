import { Component, OnInit } from '@angular/core';
import { FILAS } from 'src/app/constantes/numero-filas-por-tablas';
import {HttpClient} from "@angular/common/http";
import {MovimientoRestService} from "../../services/rest/movimiento-rest.service";
@Component({
  selector: 'app-ruta-gestion-movimiento',
  templateUrl: './ruta-gestion-movimiento.component.html',
  styleUrls: ['./ruta-gestion-movimiento.component.scss']
})
export class RutaGestionMovimientoComponent implements OnInit {
  url='http://localhost:1337';
  movimientos=[];
  FILAS = FILAS;
  fechaFiltrado="";
  estadoFiltrado="";
  busquedaMovimiento ='';
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly  _movimientoRestService: MovimientoRestService,
  ) { }

  ngOnInit() {
    const urlMovimiento = this.url + '/movimiento';
    const movimientos$ = this._httpClient.get(
      urlMovimiento
    );
    movimientos$
      .subscribe(
        (movimientos: any[]) => { // TRY
          console.log('movimientos: ', movimientos);
          this.movimientos = movimientos;
        },
        (error) => { // CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando movimientos'
          })
        }
      );

  }

  buscarMovimientoPorNombre()
  {
    const busqueda$ = this._movimientoRestService
      .buscar(this.busquedaMovimiento);
    busqueda$
      .subscribe( movimientos=> {
          this.movimientos = movimientos;
        },
        (error) => {
          console.error(error);
        }
      )
  }
  movimientosFiltrados() {
    return this.movimientos
      .filter(
        (movimiento) => {
          return movimiento.fecha.toLowerCase().includes(this.fechaFiltrado.toLowerCase());
        }
      )
      .filter(
        (movimiento) => {
          return movimiento.estado.toLowerCase().includes(this.estadoFiltrado.toLowerCase());
        }
      )

      ;
  }

}
