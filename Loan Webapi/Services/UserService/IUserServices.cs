using Loan_Webapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Loan_Webapi.Services.UserService
{
    public interface IUserServices
    {
       Task<ServiceResponse<List<User>>> GetUsers();
    }
}
