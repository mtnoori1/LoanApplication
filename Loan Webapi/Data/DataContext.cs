using Loan_Webapi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Loan_Webapi.Data
{
    public class DataContext :DbContext
    {
        /// <summary>
        /// Constructor defined
        /// </summary>
        /// <param name="options"></param>
      public DataContext(DbContextOptions<DataContext> options) : base(options) { }
    /////DBset Defined
      public DbSet<Loan> _loan { get; set; }
      public DbSet<User> _usr { get; set; }
    }
}
