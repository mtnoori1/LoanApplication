import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
@Injectable({
    providedIn :'root'
})

export class AuthServices{
    constructor(private _router:Router, private _jwthelper: JwtHelperService){}
    
    isUserAuthenticated(){
        const tok: any=localStorage.getItem("jwt");       
        if(tok && !this._jwthelper.isTokenExpired(tok)){
            return true;
        }
        else {
            return false;
        }
    }
}
