import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-modal-editar-area',
  templateUrl: './modal-editar-area.component.html',
  styleUrls: ['./modal-editar-area.component.scss']
})
export class ModalEditarAreaComponent implements OnInit {
  nombre="";
  descripcion="";
  estado="";
  idPiso="";
  url = 'http://localhost:1337';
  pisos=[];
  idEdificio="";
  edificios=[];
  constructor(
    public dialogRef:MatDialogRef<ModalEditarAreaComponent>,
    private readonly _httpClient: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) { }

  ngOnInit() {

    //consultar los edificios
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

    console.log('datos en modal', this.data);

    if (this.data != null) {

      this.nombre = this.data.area.nombre;
      this.descripcion = this.data.area.descripcion;
      this.estado = this.data.area.estado;
      this.idEdificio= this.data.area.idEdificio;
      this.consultarPisosDelEdificio(this.idEdificio);
      this.idPiso= this.data.area.idPiso;
    }
  }


  consultarPisosDelEdificio(evento)
  {
    //consultar los pisos
   // console.log('evento: ', evento);
    const dato= evento;
    console.log('dato: ', dato); //http://localhost:1337/piso?idEdificio=1
    const urlPiso = this.url + '/piso?idEdificio='+dato;
    console.log('url: ', urlPiso);
    const pisos$ = this._httpClient.get(
      urlPiso
    );
    pisos$
      .subscribe(
        (pisos: any[]) => { // TRY
          console.log('pisos: ', pisos);
          this.pisos = pisos;
        },
        (error) => { // CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando pisos'
          })
        }
      );

  }


  cancelar()
  {
    this.dialogRef.close();
  }

  aceptar()
  {
    this.dialogRef.close({
      nombre:this.nombre,
      descripcion:this.descripcion,
      estado:this.estado,
      idPiso:this.idPiso,
      idEdificio:this.idEdificio,
    })
  }

}
