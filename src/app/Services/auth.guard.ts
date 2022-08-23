import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthServices } from "./auth.services";

@Injectable({
    providedIn:'root'
})

export class AuthGuard implements CanActivate{
    constructor(private _auth:AuthServices,private router:Router){}
    canActivate() {
        console.log("From auth guard "+this._auth.IsLoggedIn());
        if(this._auth.IsLoggedIn()){
            return true
        }else{
          alert("you have not logged In")
          this.router.navigate(['./login']);
          return false; 
        }
    }
    
}