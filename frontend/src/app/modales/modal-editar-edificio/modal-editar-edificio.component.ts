import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-editar-edificio',
  templateUrl: './modal-editar-edificio.component.html',
  styleUrls: ['./modal-editar-edificio.component.scss']
})
export class ModalEditarEdificioComponent implements OnInit {
nombre="";
ubicacion="";
estado="";

  constructor(
    public dialogRef:MatDialogRef<ModalEditarEdificioComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) { }

  ngOnInit() {
    console.log('datos en modal', this.data);
    if (this.data != null) {
      this.nombre = this.data.edificio.nombre;
      this.ubicacion = this.data.edificio.ubicacion;
      this.estado = this.data.edificio.estado;

    }
  }
  cancelar()
  {
    this.dialogRef.close();
  }

  aceptar()
  {
    this.dialogRef.close({
      nombre:this.nombre,
      ubicacion:this.ubicacion,
      estado:this.estado})
  }
}
