import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthServices} from "../authService";

@Injectable({
  providedIn:'root'
})

export class  EsAdministradorPolicy implements CanActivate{

  constructor(
    private readonly _authService:AuthServices,
    private router:Router,
  )
  {}
//route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    console.log('rol,',this._authService.sesion.rol.toLowerCase());
    if(this._authService.sesion.rol.toLowerCase() === 'administrador')
    {
      return true;
    }
  else {
      console.log('No tiene permiso');
      this.router.navigate(['/inicio']);
      return false;
  }
  }



}
