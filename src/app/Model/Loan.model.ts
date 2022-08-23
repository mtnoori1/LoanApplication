export class Loan{
              id:number;
              loannumber : string;
            loanamount: string;
              term: number;
              status:string;
              firstname:string;
              lastname: string;
   constructor(_id:number,_loannumber:string,_loanamount:string,_term:number,_status:string,_firstname:string,_lastname:string){
       this.id=_id;
       this.loannumber=_loannumber;
       this.loanamount=_loanamount;
       this.term=_term;
       this.status=_status;
       this.firstname=_firstname;
       this.lastname=_lastname;
   }
}