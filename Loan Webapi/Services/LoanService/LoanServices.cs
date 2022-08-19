using Loan_Webapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Loan_Webapi.Services.LoanService
{
    public class LoanServices : ILoanServices
    {
        List<Loan> _loan = new List<Loan>();
       
        public async Task<ServiceResponse<string>> DelById(int id)
        {
            ServiceResponse<string> _servicersp = new ServiceResponse<string>();
            string msg = null; ;
            
               Loan delloan=_loan.Find(x => x.id == id);
                _loan.Remove(delloan);
                msg = "successfully deleted";
            
            _servicersp.message = msg;
            return _servicersp;
        }

        public async Task<ServiceResponse<List<Loan>>> GetAllData()
        {
            ServiceResponse<List<Loan>> _service = new ServiceResponse<List<Loan>>();
            _service.Data = _loan;
            return _service;
        }

        public async  Task<ServiceResponse<string>> PostbyBody(Loan ln)
        {
            ServiceResponse<string> _services = new ServiceResponse<string>();
            if (_loan.Count == 0)
            {
                ln.id = 1;
            }
            else
            {
                ln.id = _loan.Max(x => x.id) + 1;
            }
            _loan.Add(ln);
            _services.message="Post changes saved";
            
            return _services;
        }

        public async Task<ServiceResponse<Loan>> PutByBody(Loan updateloan)
        {
               ServiceResponse<Loan> _srvc = new ServiceResponse<Loan>();
            if (_loan.Count > 0)
            {
                Loan _lon = _loan.FirstOrDefault(x => x.id == updateloan.id);
                _lon.loannumber = updateloan.loannumber;
                _lon.loanamount = updateloan.loanamount;
                _lon.status = updateloan.status;
                _lon.lastname = updateloan.lastname;
                _lon.firstname = updateloan.firstname;
                _srvc.message = updateloan.loannumber + " Updated Succesfully Completed";
                _srvc.Data = _lon;
            }
            return _srvc;
        }


    }
}
