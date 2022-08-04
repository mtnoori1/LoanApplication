import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-app',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashBoardComponent {
  displayStyle = "none"
  displayStyleview="none";
  displayStyleEditDelete="none";
  tabheader:string[]=["Loan Number","Loan Amount","Loan Term","Orgination date","Status","View Details","Edit/Delete"];
  tabhead:string[]=["Loan Number","Loan Amount","Loan Term","Borrower Information","Property Information","Status","Loan Management Fee","Orgination Date","Orgination Account","Lien Information"];
  
  openPopup() {
    this.displayStyle = "block";
  }
  openPopupView(){
    this.displayStyleview="block"
  }
  openPopupEditDelete(){
    this.displayStyleEditDelete="block"
  }
  closePopup() {
    this.displayStyle = "none";
  }
  closePopupView(){
    this.displayStyleview="none";
  }
  closePopupEditDelete(){
    this.displayStyleEditDelete="none"
  }
  constructor(private router:Router){}
  Logout()
  {
    this.router.navigate(['./login']);
  }
}