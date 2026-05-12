using AutoMapper;
using Microsoft.Extensions.Configuration;
using SchoolManagement.Application.DTOs.WebsiteCVs;
using SchoolManagement.Domain;

namespace SchoolManagement.Application.Helpers
{
    public class WebsiteCVFileUrlResolver : IValueResolver<WebsiteCV, WebsiteCVDto, string>
    {
        

        private readonly IConfiguration _config;
        public WebsiteCVFileUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(WebsiteCV source, WebsiteCVDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.DocumentFile))
            {

                return _config["ApiUrl"] + source.DocumentFile;
            }

            return null;
        }
    }
}
