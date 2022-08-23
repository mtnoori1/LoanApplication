
using Loan_Webapi.Models;
using Loan_Webapi.Services.LoanService;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Loan_Webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoanController : ControllerBase
    { 
        private readonly ILoanServices _loanservices;
        public LoanController(ILoanServices loanServices)
        {
            _loanservices = loanServices;
        }

        [Route("getall")]
        [HttpGet]
        public async Task<ServiceResponse<List<Loan>>> Get()
        {
            return await _loanservices.GetAllData();
        }
        
        [Route("delbyid")]
        [HttpDelete]
        public async Task<ServiceResponse<string>> Delbyid(int id)
        {
            return await _loanservices.DelById(id);
        }

        [Route("postbybody")]
        [HttpPost]
        public async Task<ServiceResponse<string>> Postbybody(Loan ln)
        {
            return await _loanservices.PostbyBody(ln);
        }
        [Route("putbybody")]
        [HttpPut]
        public async Task<ServiceResponse<Loan>> Putbybody(Loan ln)
        {
            return await _loanservices.PutByBody(ln);
        }
    }
}
