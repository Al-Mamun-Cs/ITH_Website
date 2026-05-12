using SchoolManagement.Domain.Common;
using System;
using System.Collections.Generic;

namespace SchoolManagement.Domain
{
    public partial class Bank : BaseDomainEntity
    {
        public Bank()
        {
            

        }

        public int BankId { get; set; }
        public string? BankName { get; set; }
        public bool IsActive { get; set; }

        

    }
}
