using SchoolManagement.Domain.Common;
using System;
using System.Collections.Generic;

namespace SchoolManagement.Domain
{
    public partial class District : BaseDomainEntity
    {
        public District()
        {
            Upozilas = new HashSet<Upozila>();
            
        }

        public int DistrictId { get; set; }
        public int DivisionId { get; set; }
        public string DistrictName { get; set; }
        public string? DistrictNameBangla { get; set; }
        public int? Status { get; set; }
        public int? ManuPositon { get; set; }
        public bool IsActive { get; set; }

        public virtual Division? Division { get; set; } 
        public virtual ICollection<Upozila> Upozilas { get; set; }

    }
}
