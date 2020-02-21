import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn:'root'})

export class SensorAreaRestService {

  url= environment.url+'/sensorArea';
  constructor(private readonly _httpClient: HttpClient)
  {}

  crear(datos): Observable<any>
  {
    const urlCrear = this.url;
    return this._httpClient
      .post(
        urlCrear,
        datos
      );
  }

  editar(id: number, datos): Observable<any> {
    const urlEditar = this.url + '/' + id;
    return this._httpClient
      .put(
        urlEditar,
        datos
      );
  }

  buscar(busqueda: string): Observable<any> {
    let consulta ='';
    if (busqueda)
    {
      consulta = '?nombre=' + busqueda;
    }
    const urlBuscar = this.url + consulta;
    return this._httpClient
      .get(
        urlBuscar
      );
  }

  eliminar(id: string): Observable<any> {
    const urlEliminar = this.url + '/' + id;
    return this._httpClient
      .delete(
        urlEliminar
      );
  }

}
