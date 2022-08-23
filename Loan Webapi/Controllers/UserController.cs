
using Loan_Webapi.Models;
using Loan_Webapi.Services.UserService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace Loan_Webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserServices _userservices;
        public UserController(IUserServices userServices)
        {
            _userservices = userServices;
        }
        [Microsoft.AspNetCore.Mvc.HttpGet]
        [Route("getuser")]
        public async Task<ServiceResponse<List<User>>> UserDetails()
        {
            return await _userservices.GetUsers();
        }
        [Route("LoginUser")]
        [System.Web.Http.HttpPost]
        public IActionResult Login(User _usr)
        {
            string useravailable = _userservices.LoginUser(_usr);
            if (useravailable == "Yes") {
                return Ok("Success");
            }else
            {
                return Ok("Failure");
            }
              
        }
    }
}
