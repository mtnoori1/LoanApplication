using Loan_Webapi.Data;
using Loan_Webapi.Models;
using Loan_Webapi.Services.UserService;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Loan_Webapi.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserServices _userservice;
        public AuthController(IUserServices userservice)
        {
            _userservice = userservice;
        }
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody] User _usr)
        {
            if(_usr==null)
            {
                return BadRequest("Invalid Client Request");
            }
            if (_userservice.LoginUser(_usr))
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var tokenOptions = new JwtSecurityToken(
                    issuer: "https://localhost:5001",
                    audience: "https//localhost:5001",
                    claims:new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials:signingCredentials

                    );
                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
                return Ok(new { Token = tokenString });
            }
            return Unauthorized();
        }
    }
}
