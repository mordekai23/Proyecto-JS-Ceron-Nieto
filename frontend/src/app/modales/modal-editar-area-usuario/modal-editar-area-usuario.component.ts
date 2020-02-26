import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-editar-area-usuario',
  templateUrl: './modal-editar-area-usuario.component.html',
  styleUrls: ['./modal-editar-area-usuario.component.scss']
})
export class ModalEditarAreaUsuarioComponent implements OnInit {
  areas=[];
  url='http://localhost:1337';
  listaAreaSelecionada=[];
  departamentos=[];
  idEdificio="";
  edificios=[];
  idDepartamento=[];
  mostrarMensaje="";

  constructor(
    public dialogRef:MatDialogRef<ModalEditarAreaUsuarioComponent>,
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
        },
        (error) => { // CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando edificios'
          })
        }
      );

    console.log('datos en modal', this.data);
    console.log('areasUsuarioDelUsuario: ', this.data.usuario.areasUsuarioDelUsuario)
    if (this.data != null) {
      this.idEdificio= this.data.usuario.areasUsuarioDelUsuario[0].idEdificio;
      this.consultarDepartamentosDelEdificio(this.idEdificio);
      this.idDepartamento=this.data.usuario.areasUsuarioDelUsuario[0].idDepartamento;
      this.consultarAreaDelDepartamento(this.idDepartamento);
      this.listaAreaSelecionada = this.data.usuario.areasUsuarioDelUsuario;
console.log('siii listaS',this.listaAreaSelecionada );
      if(this.listaAreaSelecionada ! == undefined)
      {
        for(let i=0; i<=this.listaAreaSelecionada.length; i++)
        {
          var r = this.areas.includes(this.listaAreaSelecionada[i]);

            this.listaAreaSelecionada[i].seleccionada=true;
        }


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
          if(areas.length > 0)
          {
            console.log('areas: ', areas);
            this.mostrarMensaje="";
            this.areas = areas;
          }
         else
          {
            console.log(this.mostrarMensaje);
            this.mostrarMensaje="No existen areas para el departamento seleccionado";
            this.areas=[];
          }

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
      idDepartamento:this.idDepartamento,
      idEdificio:this.idEdificio,
      listaAreaSelecionada:this.listaAreaSelecionada,
    })
  }

}
