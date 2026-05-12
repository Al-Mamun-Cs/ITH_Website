using SchoolManagement.Domain.Common;
using System;
using System.Collections.Generic;

namespace SchoolManagement.Domain
{
    public partial class PaymentStatus : BaseDomainEntity
    {
        public PaymentStatus()
        {
        }

        public int PaymentStatusId { get; set; }
        public string? StatusName { get; set; }
        public int? PriorityNo { get; set; }
        public bool IsActive { get; set; }

        
    }
}
