using SchoolManagement.Domain.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace SchoolManagement.Domain
{
    public partial class Supplier : BaseDomainEntity
    {
        public Supplier()
        {

        }

        public int SupplierId { get; set; }
        public int? CustomerTypeId { get; set; }
        public int? SupplierTypeId { get; set; }
        public int? DivisionId { get; set; }
        public int? DistrictId { get; set; }
        public int? UpazilaId { get; set; }
        public int? CategoryId { get; set; }
        public int? ProductTypeId { get; set; }
        public int? WarehouseId { get; set; }
        public string? SupplierName { get; set; }
        public string? ShopName { get; set; }
        public string? Address { get; set; }
        public string? TIN { get; set; }
        public string? TradeLicenseNo { get; set; }
        public string? PhoneNo { get; set; }
        public string? Email { get; set; }
        public string? ContactPerson { get; set; }
        public int? CountryId { get; set; }
        public int? SupplierStatus { get; set; }
        public decimal? TotalAdvanceAmount { get; set; }
        public decimal? TotalDueAmount { get; set; }
        public decimal? TotalPaidAmount { get; set; }
        public decimal? CommissionPercent { get; set; }
        public DateTime? CommissionPaidDate { get; set; }
        public DateTime? MonthClosingDate { get; set; }
        public decimal? CreditLimitAmount { get; set; }
        public string? ClientsImage { get; set; }
        public string? Remarks { get; set; }
        public bool IsActive { get; set; }

        public virtual CustomerType? CustomerType { get; set; }
        public virtual Division? Division { get; set; }
        public virtual District? District { get; set; }
        [ForeignKey("UpazilaId")]
        public virtual Upozila? Upozila { get; set; }
        public virtual EasyBikeType? Category { get; set; }
        public virtual ProductType? ProductType { get; set; }
        public virtual Country? Country { get; set; }
    }
}
