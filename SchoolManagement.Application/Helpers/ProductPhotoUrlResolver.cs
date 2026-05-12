using AutoMapper;
using SchoolManagement.Domain;
using Microsoft.Extensions.Configuration;
using SchoolManagement.Application.DTOs.ProductTypes;

namespace SchoolManagement.Application.Helpers
{
    public class ProductPhotoUrlResolver : IValueResolver<ProductType, ProductTypeDto, string>
    {
        

        private readonly IConfiguration _config;
        public ProductPhotoUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(ProductType source, ProductTypeDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.ProductImages))
            {

                return _config["ApiUrl"] + source.ProductImages;
            }

            return null;
        }
    }
}
