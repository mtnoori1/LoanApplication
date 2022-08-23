using Loan_Webapi.Data;
using Loan_Webapi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Loan_Webapi.Services.UserService
{
    public class UserServices : IUserServices
    {

        private readonly DataContext _datacontext;
        public UserServices(DataContext datacontext)
        {
            _datacontext = datacontext;
        }
        public async Task<ServiceResponse<List<User>>> GetUsers()
        {
          
            ServiceResponse<List<User>> _servic = new ServiceResponse<List<User>>();
            List<User> usr = await _datacontext._usr.ToListAsync();           
            _servic.Data=usr;
            return _servic;
        }

        public  string LoginUser(User usr)
        {
            var useravailable = _datacontext._usr.Where(u => u.username == usr.username && u.password == usr.password).FirstOrDefault();
            if (useravailable != null)
            {
                return "Yes";
            }
            else return "No";
        }
    }
}
