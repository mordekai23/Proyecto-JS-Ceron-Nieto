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
  idDepartamento="";
  url = 'http://localhost:1337';
  departamentos=[];
  idEdificio="";
  edificios=[];
  sensores=[];

  constructor(
    public dialogRef:MatDialogRef<ModalEditarAreaComponent>,
    private readonly _httpClient: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) { }

  ngOnInit() {

    //consultar los edificios
    const urlEdificio = this.url + '/edificio';
    const edificios$ = this._httpClient.get(urlEdificio);
    edificios$
      .subscribe(
        (edificios: any[]) => { // TRY
          console.log('edificios: ', edificios);
          this.edificios = edificios;
          //this.consultarSensores();
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
      this.consultarDepartamentosDelEdificio(this.idEdificio);
      this.idDepartamento= this.data.area.idDepartamento.id;
    }
  }


  consultarDepartamentosDelEdificio(evento)
  {
    const dato= evento;
    console.log('dato: ', dato);
    const urlDepartamento = this.url + '/departamento?idEdificio='+dato;
    console.log('url: ', urlDepartamento);
    const departamentos$ = this._httpClient.get(
      urlDepartamento
    );
    departamentos$
      .subscribe(
        (departamentos: any[]) => { // TRY
          console.log('departamentos: ', departamentos);
          this.departamentos = departamentos;
        },
        (error) => { // CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando departamentos'
          })
        }
      );

  }

  consultarSensores()
  {
    const urlSensor = this.url + '/sensor';
    console.log('url: ', urlSensor);
    const sensores$ = this._httpClient.get(urlSensor);
    sensores$
      .subscribe(
        (sensores: any[]) => { // TRY
          console.log('sensores: ', sensores);
          this.sensores = sensores;
        },
        (error) => { // CATC1H
          console.error({
            error: error,
            mensaje: 'Error consultando sensores'
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
      idDepartamento:this.idDepartamento,
      idEdificio:this.idEdificio,

    })
  }

}
