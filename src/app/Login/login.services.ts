import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { user } from "../Model/User.model";
import {HttpClient} from '@angular/common/http';
@Injectable({
    providedIn:'root'
})

export class LoginService{
   constructor(private http:HttpClient){}
   private url:string="https://localhost:5001/api/User/LoginUser";

   getusers():Observable<user>{
       return this.http.get<user>(this.url);
   }

   loginuser(logininfo:Array<string>){
       return this.http.post(this.url,{
        username: logininfo[0],
        password: logininfo[1]
        },
        {
        responseType:'text',
        }
        );
        ;
   }
}