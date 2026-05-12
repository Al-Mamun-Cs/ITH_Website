using SchoolManagement.Domain.Common;
using System;
using System.Collections.Generic;

namespace SchoolManagement.Domain
{
    public partial class AwardAndEvent 
    {
        public AwardAndEvent()
        {
            
            
        }

        public int AwardAndEventId { get; set; }
        public int? Type { get; set; }
        public string? Image { get; set; }
        public string? Name { get; set; }
        public string? Descriptions { get; set; }
        public DateTime? Date { get; set; }
        public bool? IsWebsite { get; set; }
        public bool? IsEshop { get; set; }

        
        
    }
}
