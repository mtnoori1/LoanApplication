import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardServices } from './dashboard.services';

@Component({
  selector: 'dashboard-app',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashBoardComponent implements OnInit{
  _loan:any;
  displayStyle = "none"
  displayStyleview="none";
  displayStyleEditDelete="none";
  tabheader:string[]=["Loan Number","First Name","Last","Loan Amount","Status","Loan Term","View Details","Edit/Delete"];
  tabhead:string[]=["Loan Number","Loan Amount","Loan Term","Borrower Information","Property Information","Status","Loan Management Fee","Orgination Date","Orgination Account","Lien Information"];
  constructor(private _dashservice:DashboardServices,private router:Router){}
  ngOnInit(){
      this._dashservice.getloan().subscribe(res=>{
        this._loan=res;
        console.log(this._loan.data);      
      })
  }


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
  Logout()
  {
    this.router.navigate(['./login']);
  }
}