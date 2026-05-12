using SchoolManagement.Domain.Common;
using System;
using System.Collections.Generic;

namespace SchoolManagement.Domain
{
    public partial class EasyBikeType : BaseDomainEntity
    {
        public EasyBikeType()
        {
            ProductTypes = new HashSet<ProductType>();

           
        }

        public int EasyBikeTypeId { get; set; }
        public int? ItemProductionTypeId { get; set; }
        public string? TypeName { get; set; }
        public int? FeesAmount { get; set; }
        public string? CategoryImages { get; set; }
        public string? WebsiteProductName { get; set; }
        public string? WebsiteProductNameDescriptions { get; set; }
        public bool? IsWebsite { get; set; }
        public bool IsActive { get; set; }

        


        public virtual ICollection<ProductType> ProductTypes { get; set; }
     
    }
}
