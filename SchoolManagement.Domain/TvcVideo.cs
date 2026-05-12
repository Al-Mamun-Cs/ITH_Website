using SchoolManagement.Domain.Common;
using System;
using System.Collections.Generic;

namespace SchoolManagement.Domain
{
    public partial class TvcVideo 
    {
        public TvcVideo()
        {
            
            
        }

        public int TvcVideoId { get; set; }
        public string? VideoDoc { get; set; }
        public string? Name { get; set; }
        public string? Descriptions { get; set; }
        public DateTime? Date { get; set; }
        public bool? IsWebsite { get; set; }
        public bool? IsEshop { get; set; }

        
        
    }
}
