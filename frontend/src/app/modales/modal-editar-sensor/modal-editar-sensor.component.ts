import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-modal-editar-sensor',
  templateUrl: './modal-editar-sensor.component.html',
  styleUrls: ['./modal-editar-sensor.component.scss']
})
export class ModalEditarSensorComponent implements OnInit {
  nombre="";
  codigoInterno="";
  idArea="";
  url = 'http://localhost:1337';
  edificios=[];
  departamentos=[];
  areas=[];

  idEdificio="";
  idDepartamento="";
  constructor(
    public dialogRef:MatDialogRef<ModalEditarSensorComponent>,
    private readonly _httpClient: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) { }

  ngOnInit() {
    //consultar los edificios
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
      this.nombre = this.data.sensor.nombre;
      this.codigoInterno = this.data.sensor.codigoInterno;
     this.idEdificio= this.data.sensor.idEdificio;

      //this.idDepartamento= this.data.sensor.idDepartamento;

      //this.idArea= this.data.sensor.idArea.id;

      this.consultarDepartamentosDelEdificio(this.idEdificio);
      if(this.data.sensor.idDepartamento.id === undefined)
      {
        this.idDepartamento=this.data.sensor.idDepartamento;
      }
      else {
        this.idDepartamento=this.data.sensor.idDepartamento.id;
      }
      this.consultarAreaDelDepartamento(this.idDepartamento);
      if(this.data.sensor.idArea.id === undefined)
      {
        this.idArea=this.data.sensor.idArea;
      }
      else {
        this.idArea=this.data.sensor.idArea.id;
      }

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


  consultarAreaDelDepartamento(evento)
  {
    const dato= evento;
    console.log('dato: ', dato);
    const urlArea = this.url + '/area?idDepartamento='+dato;
    console.log('url: ', urlArea);
    const areass$ = this._httpClient.get(urlArea);
    areass$
      .subscribe(
        (areas: any[]) => { // TRY
          console.log('areas: ', areas);
          this.areas = areas;
          //this.consultarSensores();
        },
        (error) => { // CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando areas'
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
      codigoInterno:this.codigoInterno,
      idArea:this.idArea,
      idDepartamento:this.idDepartamento,
      idEdificio:this.idEdificio,
    })
  }

}
