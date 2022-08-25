import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { AuthServices } from "./auth.services";

@Injectable({
    providedIn:'root'
})

export class AuthGuard implements CanActivate{
    constructor(private router:Router, private _jwthelper: JwtHelperService){}
    canActivate() {
       const token=localStorage.getItem("jwt");
       if(token && !this._jwthelper.isTokenExpired(token)){
           return true;
       }
       this.router.navigate(['./login']);
       return false;
    }
    
}