using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagement.Application.DTOs.WebsiteCVs
{
    public class CreateWebsiteCVDto : IWebsiteCVDto
    {
        public int WebsiteCVId { get; set; }
        public int? JobType { get; set; }
        public string? CoverLetter { get; set; }
        public DateTime? Date { get; set; }
        public string? DocumentFile { get; set; }
        public IFormFile? Doc { get; set; }
    }
}
