import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoanApp';
  username:string="";
  password:string="";
  constructor(private router: Router){
  }
  onLoginClick()
  {this.router.navigate(['dashboard']);
    // if(this.username =="admin" &&this.password=="admin"){
    //   alert('Welcome Admin')
    //   console.log("User is Authorized");
    //   this.router.navigate(['dashboard']);
    // }else{
    //   console.log("User is Unautorized to access the page");
    //   this.router.navigate(['login']);
    // }
    
}
}
