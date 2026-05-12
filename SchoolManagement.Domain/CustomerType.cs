using SchoolManagement.Domain.Common;
using System;
using System.Collections.Generic;

namespace SchoolManagement.Domain
{
    public partial class CustomerType : BaseDomainEntity
    {
        public CustomerType()
        {
            
            
        }

        public int CustomerTypeId { get; set; }
        public string? CustomerTypeName { get; set; }
        public string? Remarks { get; set; }
        public bool IsActive { get; set; }

        
        
    }
}
