import { Injectable } from "@angular/core";

@Injectable({
    providedIn :'root'
})

export class AuthServices{
    constructor(){}

    IsLoggedIn(){
        console.log("From Auth Services  "+localStorage.getItem('isvaliduser'));
        return localStorage.getItem('isvaliduser');
    }
}
