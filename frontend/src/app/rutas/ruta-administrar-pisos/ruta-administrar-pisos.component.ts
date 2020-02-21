import { Component, OnInit } from '@angular/core';
//import { FILAS } from 'src/app/constantes/numero-filas-por-tablas';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {AreaRestService} from "../../services/rest/area-rest.service";
import {ModalEditarDepartamentoComponent} from "../../modales/modal-editar-departamento/modal-editar-area.component";

@Component({
  selector: 'app-ruta-administrar-pisos',
  templateUrl: './ruta-administrar-pisos.component.html',
  styleUrls: ['./ruta-administrar-pisos.component.scss']
})
export class RutaAdministrarPisosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
