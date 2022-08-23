import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
   
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urlgetallaloan = 'https://localhost:5001/api/Loan/getall';
    
  constructor(private httpClient: HttpClient) { }
   
  getloan(){
    return this.httpClient.get(this.urlgetallaloan);
  }
   
}