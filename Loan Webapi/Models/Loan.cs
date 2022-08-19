using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Loan_Webapi.Models
{
    public class Loan
    {
        public int id { get; set; }
        public string loannumber { get; set; }
        public string loanamount { get; set; }
        public int term { get; set; }
        public string status { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
    }
}
