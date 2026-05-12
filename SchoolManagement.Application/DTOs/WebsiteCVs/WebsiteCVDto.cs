using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagement.Application.DTOs.WebsiteCVs
{
    public class WebsiteCVDto : IWebsiteCVDto
    {
        public int WebsiteCVId { get; set; }
        public int? JobType { get; set; }
        public string? CoverLetter { get; set; }
        public DateTime? Date { get; set; }
        public string? DocumentFile { get; set; }
    }
}
