using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagement.Application.DTOs.ProductTypes
{
    public class ProductTypeDto : IProductTypeDto
    {
        public int ProductTypeId { get; set; }
        public int? CategoryId { get; set; }
        public int? SubCategoryId { get; set; }
        public int? CountryId { get; set; }
        public int? WarehouseId { get; set; }
        public string? TypeName { get; set; }
        public decimal? UnitPrice { get; set; }
        public string? Code { get; set; }
        public decimal? FeesAmount { get; set; }
        public decimal? ProductionBlance { get; set; }
        public decimal? ProductionPrice { get; set; }
        public decimal? CostPrice { get; set; }
        public decimal? RegularMRP { get; set; }
        public decimal? WholeSalePrice { get; set; }
        public decimal? DealerPrice { get; set; }
        public string? ProductImages { get; set; }
        public decimal? AlertQty { get; set; }
        public string? Remarks { get; set; }
        public bool? WebsitePublish { get; set; }
        public bool? Others { get; set; }
        public int? ProductPinId { get; set; }
        public int? ProductMeterId { get; set; }
        public int? UnitOfMeasurementId { get; set; }
        public int? ItemProductionTypeId { get; set; }
        public int? ProductSeriesId { get; set; }
        public int? ProductModelId { get; set; }
        public int? BrandId { get; set; }
        public bool IsActive { get; set; }
        public string? Category { get; set; }
        public string? SubCategory { get; set; }
        public string? Country { get; set; }
        public string? Warehouse { get; set; }
        public string? Series { get; set; }
        public string? Model { get; set; }
        public string? Unit { get; set; }
        public string? Pin { get; set; }
        public string? Meter { get; set; }
        public string? ProductionType { get; set; }
    }
}
