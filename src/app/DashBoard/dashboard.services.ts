import { getLocaleEraNames } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Loan } from "../Model/Loan.model";

@Injectable({
    providedIn:'root'
})
export class DashboardServices implements OnInit{
    _loan:any;
    private getloanurl="https://localhost:5001/api/Loan/getall";
    private postloanurl="https://localhost:5001/api/Loan/postbybody";
    private putloanurl="https://localhost:5001/api/Loan/putbybody";
    private delloanurl="https://localhost:5001/api/Loan/delbyid";

    constructor(private _http:HttpClient){}

    ngOnInit(){
       this._http.get<Loan>(this.getloanurl).subscribe(res=>{
           this._loan=res;
       },
       err=>{
           console.log(err);
       })
    }
    //   getloan():Observable<Loan>{
    //       return this._http.get<Loan>(this.getloanurl);
    //   }
    //  postloan(ln:Loan){
    //      return this._http.post(this.postloan,ln);
    //  }

    }

