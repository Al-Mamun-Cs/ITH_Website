using SchoolManagement.Domain.Common;
using System;
using System.Collections.Generic;

namespace SchoolManagement.Domain
{
    public partial class WebsiteCV 
    {
        public WebsiteCV()
        {
            
            
        }

        public int WebsiteCVId { get; set; }
        public int? JobType { get; set; }
        public string? CoverLetter { get; set; }
        public DateTime? Date { get; set; }
        public string? DocumentFile { get; set; }

        
        
    }
}
