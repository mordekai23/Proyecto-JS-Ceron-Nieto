import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-editar-usuario',
  templateUrl: './modal-editar-usuario.component.html',
  styleUrls: ['./modal-editar-usuario.component.scss']
})
export class ModalEditarUsuarioComponent implements OnInit {
  nombre="";
  correo="";
  estado="";
  rol="";

  constructor(
    public dialogRef:MatDialogRef<ModalEditarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) { }

  ngOnInit() {
    console.log('datos en modal', this.data);
    if (this.data != null) {
      this.nombre = this.data.usuarios.nombre;
      this.correo = this.data.usuarios.correo;
      this.estado = this.data.usuarios.estado;
      this.rol = this.data.usuarios.rol;
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
      correo:this.correo,
      estado:this.estado,
      rol:this.rol})
  }
}
