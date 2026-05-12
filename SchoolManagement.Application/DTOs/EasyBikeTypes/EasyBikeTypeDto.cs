using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagement.Application.DTOs.GoodSales
{
    public class EasyBikeTypeDto : IEasyBikeTypeDto
    {
        public int EasyBikeTypeId { get; set; }
        public int? ItemProductionTypeId { get; set; }
        public string? TypeName { get; set; }
        public int? FeesAmount { get; set; }
        public string? CategoryImages { get; set; }
        public string? WebsiteProductName { get; set; }
        public string? WebsiteProductNameDescriptions { get; set; }
        public bool? IsWebsite { get; set; }
        public bool IsActive { get; set; }

        public string? ProductionType { get; set; }
    }
}
