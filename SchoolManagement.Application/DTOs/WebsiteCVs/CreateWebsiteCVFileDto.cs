using Microsoft.AspNetCore.Http;

namespace SchoolManagement.Application.DTOs.WebsiteCVs
{
    public class CreateWebsiteCVFileDto
    {
        

        public IFormFile Doc { get; set; }
        public CreateWebsiteCVDto WebsiteCVForm { get; set; }
}
}
