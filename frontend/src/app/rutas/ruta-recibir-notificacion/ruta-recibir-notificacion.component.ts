import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MovimientoRestService} from "../../services/rest/movimiento-rest.service";
import {Router} from "@angular/router";
import {AuthServices} from "../../services/auth/authService";

@Component({
  selector: 'app-ruta-recibir-notificacion',
  templateUrl: './ruta-recibir-notificacion.component.html',
  styleUrls: ['./ruta-recibir-notificacion.component.scss']
})
export class RutaRecibirNotificacionComponent implements OnInit {
  mensaje="";
  movimientos=[];
  url = 'http://localhost:1337';
  fecha= new Date();
  fechaFormatoActual="";
  ultimoMovimiento=[];
   moviminetoEditado: [];
  idUsuario="";
  enviarNotificacionAlUsuario= "";

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _authService:AuthServices,
    private readonly _movimientoRestService: MovimientoRestService,
    private router:Router,
  ) { }

  ngOnInit() {

    this.idUsuario = this._authService.sesion.id;
    this.consultarSiSeEnviaLaNotificacion();

    console.log(this.fecha);
    this.fechaFormatoActual=`${
      (this.fecha.getMonth()+1).toString().padStart(2, '0')}/${
      this.fecha.getDate().toString().padStart(2, '0')}/${
      this.fecha.getFullYear().toString().padStart(4, '0')} ${
      this.fecha.getHours().toString().padStart(2, '0')}:${
      this.fecha.getMinutes().toString().padStart(2, '0')}:${
      this.fecha.getSeconds().toString().padStart(2, '0')}`
    ;
    console.log(this.fechaFormatoActual);
    const urlMovimientos = this.url + '/movimiento';
    const movimientos$ = this._httpClient.get(urlMovimientos);
    movimientos$
      .subscribe(
        (movimientos: any[]) => { // TRY
          console.log('Movimiento: ',movimientos );
          this.movimientos = movimientos;
          if(this.movimientos[this.movimientos.length-1].estadoNotificacion ===false && this.enviarNotificacionAlUsuario === "S")
          {
            this.ultimoMovimiento[0] = this.movimientos[this.movimientos.length-1];
            this.mensaje="Movimiento registrado en el sensor " +
              this.movimientos[this.movimientos.length-1].idSensor.codigoInterno + ' ' +
              this.movimientos[this.movimientos.length-1].idSensor.nombre;
          }
          //this.buscarUltimo();
        },
        (error) => { // CATC
          console.error({
            error: error,
            mensaje: 'Error consultando movimientos'
          })
        }
      );
  }

  consultarSiSeEnviaLaNotificacion()
  {
    const urlAreaUsuario = this.url + '/areaUsuario?idUsuario='+this.idUsuario;
    const areaUsuario$ = this._httpClient.get(urlAreaUsuario);
    areaUsuario$
      .subscribe(
        (areaUsuario: any[]) => { // TRY
          console.log('area usuario: ', areaUsuario );
          this.enviarNotificacionAlUsuario = areaUsuario[0].enviarNotificacion;
          console.log('enviar not', this.enviarNotificacionAlUsuario);
        },
        (error) => { // CATC
          console.error({
            error: error,
            mensaje: 'Error consultando movimientos'
          })
        }
      );

  }

  buscarUltimo()
  {
    this.findLocal(this.movimientos,(valorActual) =>{
      return valorActual.dato === "movimiento1"
    });

  }

   findLocal(arreglo,funcion) {
    let  respuestaFind= undefined;
    let indice = undefined;
    for(let indiceInicial=0; indiceInicial < arreglo.length; indiceInicial++)
    {
      if (funcion(arreglo[indiceInicial]))
      {
        respuestaFind= arreglo[indiceInicial].dato;
        indice= indiceInicial
      };
    }
    console.log("Find -> indice: " + indice+ " valor: " + respuestaFind);
    return respuestaFind;
  }

  guardar()
  {
    var movimiento= {
      fecha: "",
      estadoNotificacion: true,
      dato: "",
      idSensor: 0,
    }

    console.log('utimo',this.ultimoMovimiento);
    if(this.ultimoMovimiento[0] !== undefined)
    {
      movimiento.dato=this.ultimoMovimiento[0].dato;
      movimiento.fecha=this.ultimoMovimiento[0].fecha;
      movimiento.estadoNotificacion=true;
      movimiento.idSensor=this.ultimoMovimiento[0].idSensor.id;
      this.guardarUsuarioHTTP(parseInt(this.ultimoMovimiento[0].id), movimiento);
    }
    else {
      this.router.navigate(['/inicio']);
    }
  }
  guardarUsuarioHTTP(id,datos) {
    const usuarioGuardado$ = this._movimientoRestService.editar(id,datos);
    usuarioGuardado$
      .subscribe(
        (movimeintoEditado: any) => {
          console.log('mov editado', movimeintoEditado);
          this.moviminetoEditado = movimeintoEditado;
          if(this.moviminetoEditado !== null)
          {
            alert("Datos guardados correctamente");
            this.router.navigate(['/inicio']);
          }

        },
        (error) => {
          console.error(error)
        }
      )





  }

}
