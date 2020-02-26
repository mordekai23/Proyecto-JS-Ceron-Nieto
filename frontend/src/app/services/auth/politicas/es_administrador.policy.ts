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

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {

    if(this._authService.sesion.rol.toLowerCase() ==='administrador')
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