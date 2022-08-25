import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../Model/User.model';
import { LoginService } from './login.services';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'login-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     public _usr:any;
    username:string='';
    password:string='';
    invalidlogin:boolean=false;
    constructor(private router: Router,private _loginservices:LoginService){}
    ngOnInit() {

    }
    loginform= new FormGroup({
      username: new FormControl("",[Validators.required]),
      pwd:new FormControl("",[Validators.required,Validators.minLength(4)])
    });
   get UserName(): FormControl{
       return this.loginform.get('username') as FormControl;
   }
   get PWD(): FormControl{
       return this.loginform.get('pwd') as FormControl;
   }
    onLoginClick(){
        console.log(this.loginform)
        this._loginservices.loginuser([this.loginform.value.username,this.loginform.value.pwd])
        .subscribe(res=>{
            const token=(<any>res).token;
            localStorage.setItem("jwt",token);
            this.invalidlogin=false;
            this.router.navigate(["./dashboard"]);
        },err=>{
            this.invalidlogin=true;
        })
        ;                 
    }
   
}