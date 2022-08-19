using Loan_Webapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Loan_Webapi.Services.UserService
{
    public class UserServices : IUserServices
    {
        public async Task<ServiceResponse<List<User>>> GetUsers()
        {
            ServiceResponse<List<User>> _servic = new ServiceResponse<List<User>>();
            List<User> usr=new List<User>();
            User us1 = new User()
            {
                id = 1,
                username = "admin",
                password = "admin "
            };
            User us2 = new User()
            {
                id = 2,
                username = "user",
                password = "user "
            };
            usr.Add(us1);
            usr.Add(us2);
            _servic.Data=usr;
            return _servic;
        }
    }
}
