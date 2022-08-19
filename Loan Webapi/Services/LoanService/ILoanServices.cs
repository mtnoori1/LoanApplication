using Loan_Webapi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
namespace Loan_Webapi.Services.LoanService
{
    public interface ILoanServices
    {
        Task<ServiceResponse<List<Loan>>> GetAllData();
        Task<ServiceResponse<string>> DelById(int id);

        Task<ServiceResponse<Loan>> PutByBody(Loan ln);
       Task<ServiceResponse<string>> PostbyBody(Loan ln);
          
    }
}
