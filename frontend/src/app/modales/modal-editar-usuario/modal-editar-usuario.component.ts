import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-editar-usuario',
  templateUrl: './modal-editar-usuario.component.html',
  styleUrls: ['./modal-editar-usuario.component.scss']
})
export class ModalEditarUsuarioComponent implements OnInit {
  nombre="";
  apellido="";
  correoElectronico="";
  password="";
  rol="";
  constructor(
    public dialogRef: MatDialogRef<ModalEditarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) { }

  ngOnInit() {
    console.log('datos en modal', this.data);
    if (this.data != null) {
      this.nombre = this.data.usuario.nombre;
      this.apellido = this.data.usuario.apellido;
      this.correoElectronico = this.data.usuario.correoElectronico;
      this.password = this.data.usuario.password;
      this.rol = this.data.usuario.rol;
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
      apellido:this.apellido,
      correoElectronico:this.correoElectronico,
      password:this.password,
      rol:this.rol,
    })
  }
}
