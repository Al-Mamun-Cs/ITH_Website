using SchoolManagement.Domain.Common;
using System;
using System.Collections.Generic;

namespace SchoolManagement.Domain
{
    public partial class SubCategory : BaseDomainEntity
    {
        public SubCategory()
        {
            ProductTypes = new HashSet<ProductType>();
            
        }
        
        public int SubCategoryId { get; set; }
        public int? ItemProductionTypeId { get; set; }
        public int? CategoryId { get; set; }
        public string? Name { get; set; }
        public int? Status { get; set; }
        public bool IsActive { get; set; }

        public virtual EasyBikeType? Category { get; set; }

        public virtual ICollection<ProductType> ProductTypes { get; set; }
        
    }
}
