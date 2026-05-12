using SchoolManagement.Domain.Common;
using System;
using System.Collections.Generic;

namespace SchoolManagement.Domain
{
    public partial class Management 
    {
        public Management()
        {
            
            
        }

        public int ManagementId { get; set; }
        public string? Name { get; set; }
        public int? DesignationId { get; set; }
        public string? Images { get; set; }
        public string? DescriptionsOne { get; set; }
        public string? DescriptionsTwo { get; set; }
        public string? DescriptionsThree { get; set; }
        public string? DescriptionsFour { get; set; }
        public bool? IsWebsite { get; set; }
        public bool? IsEshop { get; set; }

        public virtual Designation? Designation { get; set; }



    }
}
