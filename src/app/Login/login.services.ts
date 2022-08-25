import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { user } from "../Model/User.model";
import {HttpClient} from '@angular/common/http';
import { Router } from "@angular/router";
@Injectable({
    providedIn:'root'
})

export class LoginService{
   public invalidlogin:boolean=true;
   constructor(private http:HttpClient, private router:Router){}
   private url:string="https://localhost:5001/api/auth/login";

   getusers():Observable<user>{
       return this.http.get<user>(this.url);
   }

   loginuser(logininfo:Array<string>){
       return this.http.post(this.url,{
        username: logininfo[0],
        password: logininfo[1]
        }
        )
   }
}