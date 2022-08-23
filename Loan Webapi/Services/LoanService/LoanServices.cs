using Loan_Webapi.Data;
using Loan_Webapi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Loan_Webapi.Services.LoanService
{

    
    public class LoanServices : ILoanServices
    {
        private readonly DataContext _datacontext;
        public LoanServices(DataContext datacontext)
        {
            _datacontext = datacontext;
        }
    
       
        public async Task<ServiceResponse<string>> DelById(int id)
        {
            ServiceResponse<string> _servicersp = new ServiceResponse<string>();
            string msg = null;

            Loan delloan = await _datacontext._loan.FirstAsync(y => y.id == id);
            _datacontext._loan.Remove(delloan);
            await _datacontext.SaveChangesAsync();
             msg = "successfully deleted";
            
            _servicersp.message = msg;
            return _servicersp;
        }

        public async Task<ServiceResponse<List<Loan>>> GetAllData()
        {
            ServiceResponse<List<Loan>> _service = new ServiceResponse<List<Loan>>();
            List<Loan> dbdata= await _datacontext._loan.ToListAsync();
            _service.Data = dbdata;
            return _service;
        }

        public async  Task<ServiceResponse<string>> PostbyBody(Loan ln)
        {
            ServiceResponse<string> _services = new ServiceResponse<string>();           
            await _datacontext._loan.AddAsync(ln);
            await _datacontext.SaveChangesAsync();
            _services.message="Post changes saved";
            
            return _services;
        }

        public async Task<ServiceResponse<Loan>> PutByBody(Loan updateloan)
        {
               ServiceResponse<Loan> _srvc = new ServiceResponse<Loan>();

                Loan _lon = await _datacontext._loan.FirstOrDefaultAsync(x => x.id == updateloan.id);
                _lon.loannumber = updateloan.loannumber;
                _lon.loanamount = updateloan.loanamount;
                _lon.status = updateloan.status;
                _lon.lastname = updateloan.lastname;
                _lon.firstname = updateloan.firstname;
                _datacontext._loan.Update(_lon);
                await _datacontext.SaveChangesAsync();
                _srvc.message = updateloan.loannumber + " Updated Succesfully Completed";               
            return _srvc;
        }


    }
}
