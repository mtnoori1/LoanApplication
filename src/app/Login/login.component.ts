import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username:string='';
    password:string='';
    constructor(private router: Router){}
    onLoginClick(){
        if(this.password=='admin' && this.username=='admin'){
            console.log('Authorized user')
            this.router.navigate(['./dashboard']);
        }else{
            console.log('Unauthorized User');
        }
        
    }
}