import { Component, OnInit } from '@angular/core';
import {AuthServices} from "../../services/auth/authService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {
correo="";
password="";
mensajeError="";

  constructor(
    private readonly _authService:AuthServices,
    private router:Router,
  ) { }

  ngOnInit() {
  }

  login()
  {
    const respuestaLogin$ = this._authService.login(this.correo, this.password);

    respuestaLogin$.subscribe(
      (datos: any[]) => {
        if (datos.length > 0) {
          console.log('login exitoso');
          this._authService.estaLogeado = true;
          this._authService.sesion = datos[0];
          this.mensajeError="";
          this.router.navigate(['/inicio']);

        }
        else
        {
          this.mensajeError= "usuario o contraseña incorrectos";
          console.log("usuario o contraseña incorrectos");
        }
      },
      (error) => {
        console.log('usuario no existe');
        this.mensajeError = error;
      }
    );
  }
}
