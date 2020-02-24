import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-modal-editar-departamento',
  templateUrl: './modal-editar-departamento.component.html',
  styleUrls: ['./modal-editar-departamento.component.scss']
})
export class ModalEditarDepartamentoComponent implements OnInit {
  url = 'http://localhost:1337';
  numeroDeDepartamento="";
  descripcion="";
  estado="";
  idEdificio="";
  edificios=[];
  constructor(
    public dialogRef:MatDialogRef<ModalEditarDepartamentoComponent>,
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
      this.numeroDeDepartamento = this.data.departamento.numeroDeDepartamento;
      this.descripcion = this.data.departamento.descripcion;
      this.estado = this.data.departamento.estado;
      this.idEdificio = this.data.departamento.idEdificio.id

    }
  }
  cancelar()
  {
    this.dialogRef.close();
  }

  aceptar()
  {
    this.dialogRef.close({
      numeroDeDepartamento:this.numeroDeDepartamento,
      descripcion:this.descripcion,
      estado:this.estado,
      idEdificio:this.idEdificio})
  }
}

