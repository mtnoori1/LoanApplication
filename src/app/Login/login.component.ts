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
    isUservalid:boolean=false;
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
            console.log(res);
         if(res=="Failure"){
             this.isUservalid=false;
             alert('Login Unsuccessfull')
         }else{
             this.isUservalid=true;
             alert('Login Succeefull')
             this.router.navigate(['./dashboard']); 
             
         }
           localStorage.setItem("isvaliduser", JSON.stringify(this.isUservalid));
            console.log("From LocalStorage  "+localStorage.getItem('isvaliduser'));
        }
        
            );
            
    }
}