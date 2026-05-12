using SchoolManagement.Domain.Common;
using System;
using System.Collections.Generic;

namespace SchoolManagement.Domain
{
    public partial class Gender : BaseDomainEntity
    {
        public Gender()
        {
           
            
        }

        public int GenderId { get; set; }
        public string? FullName { get; set; }
        public string? ShortName { get; set; }
        public bool IsActive { get; set; }

        
        
    }
}
