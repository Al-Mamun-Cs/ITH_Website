using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagement.Application.DTOs.DuePaids
{
    public interface IDuePaidDto
    {
        public int DuePaidId { get; set; }
        public int? WarehouseId { get; set; }
        public int? SupplierId { get; set; }
        public int? InventoryId { get; set; }
        public int? PaymentStatusId { get; set; }
        public int? BankInfoId { get; set; }
        public string? ChequeNo { get; set; }
        public decimal? DuePaidAmount { get; set; }
        public decimal? DueAmount { get; set; }
        public DateTime? Date { get; set; }
        public string? Remarks { get; set; }
        public int? ApproveStatus { get; set; }
        public bool IsActive { get; set; }
    } 
}
